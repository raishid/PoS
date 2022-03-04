</div>
<!-- close App -->

<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- Bootstrap 5 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js" integrity="sha512-OvBgP9A2JBgiRad/mM36mkzXSXaJE9BEIENnVEmeZdITvwT09xnxLtT4twkCa8m/loMbPHsvPl0T8lRGVBwjlQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!--icheck -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/icheck-bootstrap/3.0.1/icheck-bootstrap.min.css" integrity="sha512-8vq2g5nHE062j3xor4XxPeZiPjmRDh6wlufQlfC6pdQ/9urJkU07NM0tEREeymP++NczacJ/Q59ul+/K2eYvcg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- AdminLTE App -->
<script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>

<!--datatable -->
<?php
    if(isLoadDatatable()): ?>

        <!-- datatable style -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-bs5/1.11.4/dataTables.bootstrap5.min.css" integrity="sha512-160haaGB7fVnCfk/LJAEsACLe6gMQMNCM3Le1vF867rwJa2hcIOgx34Q1ah10RWeLVzpVFokcSmcint/lFUZlg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-responsive-bs/2.2.9/responsive.bootstrap.min.css" integrity="sha512-lC7CsBqS9byAEsS32hb1hbptYmqxRoPc+kIKOydGHfpUXHywskhQHlIQj69/S5egtqEqsEsFwjc5x5HHx/T14Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/js/jquery.dataTables.min.js" integrity="sha512-BkpSL20WETFylMrcirBahHfSnY++H2O1W+UnEEO4yNIl+jI2+zowyoGJpbtk6bx97fBXf++WJHSSK2MV4ghPcg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-bs5/1.11.4/dataTables.bootstrap5.min.js" integrity="sha512-nfoMMJ2SPcUdaoGdaRVA1XZpBVyDGhKQ/DCedW2k93MTRphPVXgaDoYV1M/AJQLCiw/cl2Nbf9pbISGqIEQRmQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-responsive/2.2.9/dataTables.responsive.min.js" integrity="sha512-4knl+8+KWBNyMb27V1fosX42eCyJFH383Sus6gnxuqzwmQpiLpyBJyuC17RRwLd5X6cmVUQeT5lOkVXbwajvCA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-rowreorder/1.2.8/dataTables.rowReorder.min.js" integrity="sha512-ig2aIjaY0uavJm/JME2q+AVLAtGDdx7qGN1Qd11T9MvqJwLbElFCdz0lSThVsxnP5c+fpN4Y6e8ZcU1mu9pzIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        
<!--         <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-buttons/2.2.2/js/dataTables.buttons.min.js" integrity="sha512-GX4FkKxE4Wy3gbA07S8oEpK9VTZEFdEhkuxaiql/cHx7g1itJuLNUNdV+VFN1oq1yKiSIXjhprIPQe7SSMN78A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js" integrity="sha512-xQBQYt9UcgblF6aCMrwU1NkVA7HCXaSN2oq0so80KO+y68M+n64FOcqgav4igHe6D5ObBLIf68DWv+gfBowczg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.4/pdfmake.min.js" integrity="sha512-vCaf5rysVLu1/zVMefJew+IjqlQibggltPWqeo96XsdyJ4ihR3eEDV1oU60afiRXTGf8DqKUjLs2Q99HCbnjAw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.4/vfs_fonts.min.js" integrity="sha512-BDZ+kFMtxV2ljEa7OWUu0wuay/PAsJ2yeRsBegaSgdUhqIno33xmD9v3m+a2M3Bdn5xbtJtsJ9sSULmNBjCgYw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-buttons/2.2.2/js/dataTables.buttons.min.js" integrity="sha512-GX4FkKxE4Wy3gbA07S8oEpK9VTZEFdEhkuxaiql/cHx7g1itJuLNUNdV+VFN1oq1yKiSIXjhprIPQe7SSMN78A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-buttons/2.2.2/js/buttons.html5.min.js" integrity="sha512-LqvN9oWRj2YUmy7ZDYHOjWKc52n5zvDfYSmSEr07eOTFfmWXIfAmRD2ecj4jS+npR41A2xEZaWFf38SWfJIqig==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-buttons/2.2.2/js/buttons.print.min.js" integrity="sha512-UthH9WkvNUixebk8yKEFm3Sy+Rm8GbuvxiIMCDs9Cepl+YxhY+LUijPFZshcW7+PHa/HcSFLfSX3fGq1AcglWg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables-buttons/2.2.2/js/buttons.colVis.min.js" integrity="sha512-TDM0Ek51cJSpP8Btld1ahY8LpMImyQ1k+Ve81qGMdjBLKhADu99JQrUWDuRnT8M0qfkJb+Mt+ZwMaMi46UXA8g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
<?php
    endif;
?>

</body>

</html>