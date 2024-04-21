let page = 1

let startPage = ["select q.questions from secqs.questions q where q.question_id =" +page + ";",
    "select c1.question_answer " +
"from secqs.co1 c1 " +
"where c1.question_id ="+ page + ";",
    "select c2.question_answer " +
"from secqs.co2 c2 " +
"where c2.question_id ="+ page + ";",
    "select c3.question_answer\n" +
    "from secqs.co3 c3\n" +
    "where c3.question_id ="+ page + ";"]
function start(){
    console.log(page)
    $.get('http://127.0.0.1:3000/query', {query: "select q.questions from secqs.questions q where q.question_id =" +page + ";"}, function(data) {
        $('#question').empty();
        console.log(startPage[0])
        data.forEach(c=>{
            $('#question').text(c.questions)
        })
    });

    R1()
    R2()
    R3()
}

function R1(){
    $.get('http://127.0.0.1:3000/query', {query: "select c1.question_answer " +
            "from secqs.co1 c1 " +
            "where c1.question_id ="+ page + ";"}, function(data) {
        $('#co1ans').empty();

        data.forEach(c=>{
            $('#co1ans').text(c.question_answer)
        })
    });
}
function R2(){
    $.get('http://127.0.0.1:3000/query', {query: "select c2.question_answer " +
            "from secqs.co2 c2 " +
            "where c2.question_id ="+ page + ";"}, function(data) {
        $('#co2ans').empty();

        data.forEach(c=>{
            $('#co2ans').text(c.question_answer)
        })
    });
}
function R3(){
    $.get('http://127.0.0.1:3000/query', {query: "select c3.question_answer\n" +
            "from secqs.co3 c3\n" +
            "where c3.question_id ="+ page + ";"}, function(data) {
        $('#co3ans').empty();

        data.forEach(c=>{
            $('#co3ans').text(c.question_answer)
        })
    });
}

function NextPage(){//TODO: also need to add a update query for the rating of the answers
    page +=1
    start()
}

function PrevPage(){
    if(page >= 2){
        page -=1
        start()
    }
}

function Submit(){
    console.log(document.querySelector('input[name="co1Rate"]:checked').value)
}

function sendQuery() {
    let query = $('#queryInput').val();
    let Qquery = decodeURI(query)
    $.get('http://127.0.0.1:3000/query', {query: Qquery}, function(data) {
        $('#results').empty();
        data.forEach(function(row) {
            $('#results').append(JSON.stringify(row) + '<br>');
        });
    });
}

