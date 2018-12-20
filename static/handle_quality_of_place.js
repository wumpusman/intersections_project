

function get_quality(){


            $.ajax({
                url: "api/get_quality",
                type: "POST",
                data: 'jsonData=' + JSON.stringify({'location':"empty"}),
                success: function (response) {

                    var element=$(document.getElementById('best_places'));

                    var response = JSON.parse(response);
                    console.log(response);
                    var i;
                    var text = '';
                    text += '<div >';
                    for (i = 0; i < response["ranked_options"].length; i+=2) {
                        text += response["ranked_options"][i][0];
                        text +=" |"+ response["ranked_options"][i][1];
                        text+="<div></div>"}
                    text += '</div>';
                    element.html(text)

                }.bind(this)

            });
        }
