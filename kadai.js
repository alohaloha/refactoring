$(function () {
  //html読み込んでからの処理へ

  //じゃんけんの手
  //0=>グー, 1=>チョキ, 2=>パー
  const hand = ["グー", "チョキ", "パー"];

  //レーザーのレベル
  //level0=>laser, level1=>laser2, level2=>laser3
  const laserLevel = ["laser", "laser2", "laser3"];

  // レーザービームを出す→○秒後、自動的に消える(初期レーザー)
  $("#shot").on("click", function () {
    $("#laser").show();
    setTimeout(function () {
      $("#laser").hide();
    }, 200);
  });

  // アラート集
  alert("迫りくるインベーダーから地球を守れ！！");
  alert("インベーダーが地球に達したら負けです");
  alert("クリックでレーザー攻撃、矢印キーで移動してください。");

  // アラート(じゃんけん開始タイマー)
  let alertmsg = function () {
    alert("じゃんけんを３回行い、1回勝つ度にレーザーが強化されます");
  };

  //じゃんけんメニューを数秒後に表示
  const janken = document.getElementById("janken");

  janken.style.display = "none";
  let jankenTimer = function () {
    if (janken.style.display == "none") {
      janken.style.display = "flex";
    }
  };

  //じゃんけんの回数カウンター
  let num = 0;

  let level = 0;

  // じゃんけんの関数を定義
  $("#gu, #choki, #pa").on("click", function () {
    num += 1;
    if (num == 3 || num == 6 || num == 12) {
      janken.style.display = "none";
    }

    //COMの手
    const comHand = Math.floor(Math.random() * 3);
    //押したボタンの手を配列から抽出
    $("#result").text(hand[comHand]);
    //自分の手を押したボタンから数値化（Numberメソッド)
    const myHand = Number($(this).val());
    //comHandとmyHandを比較して勝敗を判定
    const result = myHand - comHand;
    // result=0 -->>あいこ
    // result=-1,2 -->>勝ち
    // result=-2,1 -->>負け
    if (result == 0) {
      $("#result2").text("あいこ");
    } else if (result == -1 || result == 2) {
      $("#result2").text("勝ち");
      level++;
    } else {
      $("#result2").text("負け");
    }

    if (level == 1) {
      $("#laser").removeClass().addClass(laserLevel[level]);
    } else if ((level = 2)) {
      $("#laser").removeClass().addClass(laserLevel[level]);
    }
  });

  //インベーダー（第1波）の出現時間設定
  let invader = document.getElementById("invader");
  invader.style.display = "none";
  let invadertimer = function () {
    if (invader.style.display == "none") {
      invader.style.display = "flex";
    }
  };
  //インベーダー（第2波）の出現時間設定
  let invader2 = document.getElementById("invader2");
  invader2.style.display = "none";
  let invadertimer2 = function () {
    if (invader2.style.display == "none") {
      invader2.style.display = "flex";
    }
  };
  //インベーダー（第3波）の出現時間設定
  let invader3 = document.getElementById("invader3");
  invader3.style.display = "none";
  let invadertimer3 = function () {
    if (invader3.style.display == "none") {
      invader3.style.display = "flex";
    }
  };
  //インベーダー（第4波）の出現時間設定
  let invader4 = document.getElementById("invader4");
  invader4.style.display = "none";
  let invadertimer4 = function () {
    if (invader4.style.display == "none") {
      invader4.style.display = "flex";
    }
  };

  //スタートボタン
  //   //スタートボタンを押すとスタートボタン自信が消える
  $("#startbtn").on("click", function () {
    //スタートボタンを押すとスタートボタン自信が消える
    $(".center").hide();

    //インベーダー出現時間設定
    setTimeout(invadertimer, 1000);
    setTimeout(invadertimer2, 25000);
    setTimeout(invadertimer3, 55000);
    setTimeout(invadertimer4, 77000);

    //じゃんけん解説アラートの出現時間設定
    setTimeout(alertmsg, 10000);

    //じゃんけんメニューの出現時間設定
    setTimeout(jankenTimer, 10000);
    setTimeout(jankenTimer, 40000);
    setTimeout(jankenTimer, 67000);
  });

  let x = 600; //画像のx座標 Y = 600 あたりがいいかも
  let y = 650; //画像のy座標 X = 600
  let move = 50; //移動量
  //playerの初期位置
  document.getElementById("player").style.left = x + "px";
  document.getElementById("player").style.top = y + "px";
  //キーが押された時のイベント定義
  addEventListener("keydown", kdown, false);
  function kdown(e) {
    //押されたキーの判別
    if (e.keyCode == 37) {
      x -= move; // left = 1;
    }
    if (e.keyCode == 38) {
      y -= move; // up = 1;
    }
    if (e.keyCode == 39) {
      x += move; // right = 1;
    }
    if (e.keyCode == 40) {
      y += move; // down = 1;
    }

    //実際の移動
    document.getElementById("player").style.left = x + "px";
    document.getElementById("player").style.top = y + "px";
  }
});
