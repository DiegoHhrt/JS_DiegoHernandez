$(document).ready(function() {
    //Busqueda
    $(".submitcarr").on("click", () => {
        let search = $("input[name=carrera]").val();
        let petic=$.ajax({
            url:"./dynamics/php/Consultas.php",
            data: {busq:search},
            method: "POST"
        });
        petic.done((response)=>{
            $(".results").html(response);
            
        });
        petic.fail((response)=>{
            alert("No hay resultados que coincidan con"+response);
        });
    });
    //Filtro
    $("select").on("change", () => {
        let filt = $(".filtmod").val();
        let petic=$.ajax({
            url:"./dynamics/php/Consultas.php",
            data: {dato:filt},
            method: "POST"
        });
        petic.done((response)=>{
            $(".results").html(response);
        });
        petic.fail((response)=>{
            alert("No hay resultados que coincidan con"+response);
        });
    });
});
