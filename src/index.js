import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;

  // 変数に入れた後は、画面に文字が残り続けないように初期化
  document.getElementById("add-text").value = "";
  // alert(inputText);

  createIncompleteList(inputText);
};

// 共通処理を関数化
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // button(完了)作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("完了");
    // 追加する操作対象(親要素であるdivタグ)を取得
    const target = completeButton.parentNode;
    // console.log(target);

    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    // document.getElementById("incomplete-list").removeChild(target);
    deleteFromIncompleteList(target);

    // TODO内容テキストを取得
    // (要素の最初の子要素のテキストを取得)
    const text = target.firstElementChild.innerText;
    // console.log(text);

    // div以下を初期化
    target.textContent = null;
    // console.log(target);

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // alert("戻す");

      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = deleteTarget.firstElementChild.innerText;
      // console.log(text);

      // 未完了に追加
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    target.appendChild(li);
    target.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(target);
  });
  // console.log(completeButton);

  // button(削除)作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    // console.log(deleteTarget);
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(deleteTarget);
  });
  // console.log(deleteButton);

  // divタグの子要素に各要素を設定
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
