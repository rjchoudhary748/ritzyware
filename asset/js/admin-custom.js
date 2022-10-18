jQuery(document).ready(function($) {
    //Portfolio Tables
    $(document).ready( function () {
        $('#portfolio-table').DataTable();
    } );

     //Testimonial Tables
     $(document).ready( function () {
        $('#testimonial-table').DataTable();
    } );

    //client Tables
    $(document).ready( function () {
        $('#client-table').DataTable();
    } );

    $(document).on('click','#add_portfolio', function () {
        $('#portfolio-model').show();
    } );

    $(document).on('click','#add_category', function () {
        $('#catgory-model').show();
    } );

    $(document).on('click','.p_edit', function () {
        $('#portfolio-model-edit').show();
        $('#p_edit_id').val($(this).attr('data-id'));
        $('#p_title_edit').val($(this).attr('data-name'));
        $('#p_link_edit').val($(this).attr('data-link'));        
        $('#p_cat_edit').val($(this).attr('data-cate')).trigger('change');
        console.log($(this).attr('data-cate'));
    } );

    $(document).on('click','#add_testimonial ', function () {
        $('#testmonial-model').show();
    } );

    $(document).on('click','.t_edit', function () {
        $('#testmonial-model-edit').show();
    } );   

    $(document).on('click','.add-port1', function () {
        $('.rity-model').hide();
    } );

     
});