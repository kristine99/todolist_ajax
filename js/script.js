$(document).ready(function(){
    var $lastid;
    var $clickedid;
    $.getJSON( "php/getUsers.php", function( resp ) {
        if(resp.status == 1){
            var i;
            var html;
            for(i = 0; i < resp.data.length; i++){
                html+= "<tr><td id='"+resp.data[i].id+"'>"+resp.data[i].description+"</td><td><button id='btnedit'>edit</button</td>";
                html+= "<td><button id='btndel'>delete</button></td></tr>";
                $lastid=resp.data[i].id;
            }
            $('#userList').append(html)
            $("[id=btnedit]").click(function(event){
                edit()
            })
            $("[id=btndel]").click(function(event){                
                del()
            })
            }
    })
    $("#btnadd").click(function(){
        $lastid++;
        var record = {todo:$('#todo').val()}
        $.ajax({
            url: "php/add.php",
            data: record,
            type: "GET",
            dataType: "json"

        }) 
        $('#response').text("Added")
        $('#userList').append( "<tr><td id='"+$lastid+"'>"+record.todo+"</td><td><button id='btnedit'>edit</button</td><td><button id='btndel'>delete</button></td></tr>")
        $("[id=btnedit]").click(function(event){
                edit()
            })
        $("[id=btndel]").click(function(event){                
                del()
            })
    })
    $("#btndone").click(function(){
        var record = {id:$clickedid,todo:$('#todo').val()}
        var editid = '#'+$clickedid
        $.ajax({
            url: "php/update.php",
            data: record,
            type: "GET",
            dataType: "json"
        })
        $('#btnadd').show()
        $('#btndone').hide()
        $('#todo').attr('value','').val('')
        $("[id=btnedit]").show();
        $("[id=btndel]").show();
        $(editid).text(record.todo)
    })
    edit = function(){
        $("[id=btnedit]").hide();
        $("[id=btndel]").hide();
        var editval = $(event.currentTarget).parent().parent().children('td').first().text()
        $clickedid = $(event.currentTarget).parent().parent().children('td').first().attr('id')
        $('#btnadd').hide()
        $('#btndone').show()
        $('#todo').attr('value',editval)

    }
    del = function(){
        $clickedid = $(event.currentTarget).parent().parent().children('td').first().attr('id')
        var record = {id:$clickedid}
        $.ajax({
            url: "php/delete.php",
            data: record,
            type: "GET",
            dataType: "json"
        })
        $(event.currentTarget).parent().parent().remove()
    }
});
