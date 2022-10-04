import { useNavigate, useParams, useSearchParams } from "react-router-dom";
export function withRouter(WrapperComponent) {
  function NewComponent(props) {
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams.entries());
    const router = {
      navigate,
      params,
      query,
    };
    return <WrapperComponent {...props} router={router} />;
  }
  return NewComponent;
}
