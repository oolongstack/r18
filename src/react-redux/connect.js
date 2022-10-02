import { PureComponent } from "react";
import { StoreContext } from "./context";
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super(props);
        this.state = mapStateToProps(context.getState());
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()));
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const stateObj = mapStateToProps(this.context.getState());
        const dispatchObj = mapDispatchToProps(this.context.dispatch);
        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        );
      }
    }
    NewComponent.contextType = StoreContext;
    return NewComponent;
  };
}
