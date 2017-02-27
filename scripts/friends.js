function putButton(iconWrapper) {
  document.getElementById('_chatSendTool').appendChild(iconWrapper);
  $('.sugoi_button').click(function() {
    sendChat();
  });
}

function sendChat() {
  // チャットを投稿する
  var ary = ['すごーい！','たのしー！','かりごっこだね！','たべないよ！','わーい！'];
  var random = ary[Math.floor(Math.random() * ary.length)];

  $('#_chatText').val(random);
  $('#_sendButton').trigger('click');
}

function create(label, imageFileName) {
  var icon = document.createElement('img');
  icon.src = chrome.extension.getURL('images/' + imageFileName);
  icon.setAttribute('width', '20');
  icon.setAttribute('height', '20');

  var iconWrapper = document.createElement('li');
  iconWrapper.setAttribute('class', 'sugoi_button');
  iconWrapper.setAttribute('style', 'display: inline-block; padding-left: 2px;');
  iconWrapper.setAttribute('role', 'button');
  iconWrapper.setAttribute('aria-label', label);
  iconWrapper.appendChild(icon);
  return iconWrapper;
}


var replaceButton = create('すごーい！', 'cat.svg');

putButton(replaceButton)
