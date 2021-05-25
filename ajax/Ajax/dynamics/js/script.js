$(document).ready(function() {
    //Método load
    // $("#sendinfo").on("click", ()=>{
    //     $(".tablero").load("./dynamics/php/Ajedrez.php h1");
    // });
    // $("#sendinfo").on("click", ()=>{
    //     let number = $(".numselc").val();
    //     $.post("./dynamics/php/Ajedrez.php", {dato1:number}).done((resp)=>{
    //         $(".tablero").html(resp);
    //     }).fail(()=>{
    //         alert("fail");
    //     })
    // });
    // $("#sendinfo").on("click", ()=>{
    //     let number = $(".numselc").val();
    //     $.get("./dynamics/php/Ajedrez.php", {dato1:number}).done((resp)=>{
    //         $(".tablero").html(resp);
    //     }).fail(()=>{
    //         alert("fail");
    //     })
    // });
    $("#sendinfo").on("click", ()=>{
        let number = $(".numselc").val();
        let name = $(".nombre").val();
        let pet=$.ajax({
            url: "./dynamics/php/Ajedrez.php", 
            data: {dato1:number, dato2:name},
            method: "POST"
        });
            pet.done((resp)=>{
            $(".tablero").html(resp);
        });
        pet.fail(()=>{
            alert("fail");
        })
    });
});
