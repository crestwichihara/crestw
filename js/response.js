$(document).ready(function () {
    $("#googleform").submit(function (event) {
        var data = new FormData;

        //名前を取得
        data.append('entry.1111111111', $("#googleform input[name=name]").val());
        //性別を取得
        data.append('entry.2222222222', $("#googleform input[name=gender]:checked").val());
        //好きな食べ物を選んだ分だけ取得
        $("#googleform input[name=food]:checked").each(function () {
            data.append('entry.333333333', $(this).val());
        });

        //選択肢以外でテキストボックスに入力された好きな食べ物を取得
        if($("#googleform input[name=food][type=text]").val() !== "その他の回答") {
            data.append('entry.333333333', '__other_option__');
            data.append('entry.333333333.other_option_response', $("#googleform input[name=food][type=text]").val());
        }

        $.ajax({
            url: "https://docs.google.com/forms/d/e/hogehoge/formResponse",
            data: data,
            processData: false,
            contentType: false,
            type: "POST",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("form").slideUp();
                    $('#clearopen').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("form").slideUp();
                    $('#missopen').slideDown();
                }
            }
        });
        event.preventDefault();
    });
});
