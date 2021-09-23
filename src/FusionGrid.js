import React from "react";

class ReactFG extends React.Component {
  static fcRoot(core) {
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
    const { data, config = {} } = this.props;
    this.grid = new this.FusionGrid(this.containerRef.current, data, config);

    if (this.props.onRender && typeof this.props.onRender === "function") {
      this.props.onRender(this.grid);
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
    return (
      <div
        ref={this.containerRef}
        className={this.props.className}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}

export default ReactFG;
