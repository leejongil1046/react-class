export default function counterLetDocumentPage() {
  function onClickCountUp() {
    const count = Number(document.getElementById("cnt").innerText) + 1;
    document.getElementById("cnt").innerText = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById("cnt").innerText) - 1;
    document.getElementById("cnt").innerText = count;
  }

  return (
    <div>
      <div id="cnt">0</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
