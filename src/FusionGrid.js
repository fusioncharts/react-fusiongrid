import React from "react";

class ReactFG extends React.Component {
  static fgRoot(core) {
    ReactFG.fusionGrid = core;
  }

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.FusionGrid = ReactFG.fusionGrid || window.FusionGrid;
  }

  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate(prevProps) {
    this.checkAndUpdateGridConfig(this.props.config, prevProps.config);
    this.checkAndUpdateGridData(this.props.data, prevProps.data);
  }

  checkAndUpdateGridConfig(currentConfig, oldConfig) {
    for (const i of Object.keys(currentConfig)) {
      if (currentConfig[i] !== oldConfig[i]) {
        const key = i.charAt(0).toUpperCase() + i.slice(1),
          fnName = `set${key}`;
        if (this.grid[fnName]) {
          this.grid[fnName](currentConfig[i]);
        }
      }
    }
  }

  checkAndUpdateGridData(currentData, oldData) {
    if (currentData !== oldData) {
      this.grid.setDataTable(this.props.data);
    }
  }

  componentWillUnmount() {}

  renderGrid() {
    const { data, config = {}, onRender } = this.props;
    this.grid = new this.FusionGrid(this.containerRef.current, data, config);

    if (onRender && typeof onRender === "function") {
      onRender(this.grid);
    }

    this.addGridEvents();
    this.grid.render();
  }

  /** Attach the Events dynamically if its available in the component */
  addGridEvents() {
    Object.keys(this.props).forEach((value) => {
      const event = value.match(/^fgEvent-.*/i);
      if (event && typeof this.props[value] === "function") {
        const eventName = value.replace(/^fgEvent-/i, "");
        const callbackFn = () => {
          this.props[value]();
        };
        this.grid.on(eventName, callbackFn);
      }
    });
  }

  render() {
    const { className, height, width } = this.props;
    return (
      <div
        ref={this.containerRef}
        className={className}
        style={{ width: width, height: height }}
      ></div>
    );
  }
}

export default ReactFG;
