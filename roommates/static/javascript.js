<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function confirmDeleteModal(id) {
  $('#deleteModal').modal();
  $('#deleteButton').html('<a href="?delete='+id+'" class="btn btn-danger" onclick="return closeDeleteModal('+id+')" >Delete</a>');
}

function closeDeleteModal(id) {
  $('#deleteModal').modal('hide');
  return true
}
