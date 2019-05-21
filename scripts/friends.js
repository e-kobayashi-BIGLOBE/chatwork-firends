function putButton(iconWrapper) {
  document.getElementById('_chatSendTool').appendChild(iconWrapper);
  $('.sugoi_button').click(function() {
    sendChat();
  });
}

// カタカナの単語をランダムに取得する。なかったらnullを返す。
function getKatakanaWord() {
  var rid = location.hash.split('rid')[1];
  var list = document.querySelectorAll(`#_timeLine [data-rid="${rid}"] pre`);
  var lastText = list[list.length - 1].innerText;
  var katakanaWordList = lastText.split(/[^\u30A0-\u30FF]/).filter(v => v.length > 1)
  var katakanaWord = null;
  if(katakanaWordList && katakanaWordList.length > 0) {
    katakanaWord = katakanaWordList[Math.floor(Math.random() * katakanaWordList.length)];
  }
  return katakanaWord;
}

function sendChat() {
  var katakanaWord = getKatakanaWord();
  // チャットを投稿する
  var ary = ['すごーい！','たーのしー！','わーい！','おっもしろーい！','やったー！'];
  var random = ary[Math.floor(Math.random() * ary.length)];

  $('#_chatText').val((katakanaWord || '') + random);
  $('#_sendButton').trigger('click');
}

function create(label, imageFileName) {
  var icon = document.createElement('img');
  icon.src = chrome.extension.getURL('images/' + imageFileName);
  icon.setAttribute('width', '20');
  icon.setAttribute('height', '20');

  var iconWrapper = document.createElement('li');
  iconWrapper.classList.add('list'); //
  iconWrapper.setAttribute('class', 'sugoi_button _showDescription');
  iconWrapper.setAttribute('style', 'display: inline-block; padding-left: 2px;');
  iconWrapper.setAttribute('role', 'button');
  iconWrapper.setAttribute('aria-label', label);
  iconWrapper.setAttribute('id', 'serval-chan'); //
  iconWrapper.appendChild(icon);
  return iconWrapper;
}

var replaceButton = create('すごーい！', 'cat.svg');

// ゆっくり読み込む
setTimeout(function(){putButton(replaceButton)}, 2000);