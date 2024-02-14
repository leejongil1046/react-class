import axios from "axios";
import ExamplePage from "../../section01/01-01-example";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); // Promise
  }

  // async function onClickSync() {
  //   const result = await axios.get("https://koreanjson.com/posts/1");   =>  중복 선언 문제
  //   console.log(result); // 제대로 된 결과 => {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
  //   console.log(result.data.title); // 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.
  // }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result); // 제대로 된 결과 => {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    console.log(result.data.title); // 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
      <ExamplePage />
    </div>
  );
}
