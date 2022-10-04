import React, { PureComponent } from "react";
import { withRouter } from "./withRouter";
class Detail extends PureComponent {
  render() {
    const { router } = this.props;
    console.log(router.query);
    return <div>Detail id:{router.params.id}</div>;
  }
}

export default withRouter(Detail);
