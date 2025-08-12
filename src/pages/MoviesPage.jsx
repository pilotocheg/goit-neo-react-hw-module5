import { Outlet } from "react-router";

export default function MoviesPage() {
  return (
    <div>
      <h1>Movies Page</h1>
      <Outlet />
    </div>
  );
}
