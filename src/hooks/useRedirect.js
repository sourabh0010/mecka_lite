import {
  useLocation,
  useNavigate,
  generatePath,
} from 'react-router-dom';

function useRedirect() {
  const location = useLocation();
  const routeHistory = useNavigate();
  const { search } = location;
  const query = {};
  if (search) {
    search
      .substring(1)
      .split('&')
      .forEach((data) => {
        const [key, value] = data.split('=');
        query[key] = decodeURIComponent(value);
      });
  }
  return {
    // params: match.params,
    // url: match.url,
    push: routeHistory,
    location,
    replace: routeHistory.replace,
    // path: match.path,
    generatePath,
    query,
    goBack: routeHistory.goBack,
  };
}

export default useRedirect;

