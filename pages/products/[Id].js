import { useRouter } from "next/router";

function Id() {
  let router = useRouter();
  let id = router.query.Id;
  return <h1>product {id}</h1>;
}
export default Id;
