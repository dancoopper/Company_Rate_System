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

function NextPage(){
    page +=1
    document.getElementById('submitButt').value= "Submit"
    start()
}

function PrevPage(){
    if(page >= 2){
        page -=1
        start()
    }
}

function Submit(){
    let co1 = $('input[type=radio][name=co1Rate]:checked').val()
    let co2 = $('input[type=radio][name=co2Rate]:checked').val()
    let co3 = $('input[type=radio][name=co3Rate]:checked').val()

    if(co1<1 || co1 === undefined){
        co1 = 0
    }
    if(co2<1 || co2 === undefined){
        co2 = 0
    }
    if(co3<1 || co3 === undefined){
        co3 = 0
    }

    let co1Q = "update secqs.grade set co1_q_grade ="+co1+" where question_id ="+page +";"

    let co2Q = "update secqs.grade set co2_q_grade ="+co2+" where question_id ="+page +";"

    let co3Q = "update secqs.grade set co3_q_grade ="+co3+" where question_id ="+page +";"

    $.get('http://127.0.0.1:3000/query', {query: co1Q}, function() {
        console.log("CO1:"+co1)

    });
    $.get('http://127.0.0.1:3000/query', {query: co2Q}, function() {
        console.log("CO2:"+co2)

    });
    $.get('http://127.0.0.1:3000/query', {query: co3Q}, function() {
        console.log("CO3:"+co3)
    });
    document.getElementById('submitButt').value= "Submitted"

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

