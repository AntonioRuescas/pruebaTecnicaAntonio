import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  searchTerm: string = '';
  images: any[] =[];
  showSearch: boolean = false;
  showNoSearchText: boolean = false;
  showNoResults: boolean = false;
  datosImagen: string = '200x200';
  textImages: string = "O también puede elegir una imagen de portada buscando una temática en nuestro archivo de imágenes";
  textSearch: string= "Resultados según su búsqueda:";
  textButtonSearch: string = "Buscar";
  textApi: string = "Imágenes cortesía de Pixabey";
  noResults: string = "No hay resultados";
  noTextSearch: string = "No hay ningún texto de búsqueda";

  selectedImage: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void{
    this.showSearch = false; // Al inicio no se muestran las imágenes
  }

  search():void {
    if (this.searchTerm.trim() === '') {
      this.images = [];
      this.showNoSearchText = true; // Mostrar el mensaje si no se ha ingresado un término
      this.showSearch = false;
      this.showNoResults = false;
      return;
    }else{
      this.apiService.getData(this.searchTerm).subscribe ((event:any) => {
        console.log(event);
        this.images = event.hits;
        this.showSearch = true; // Se ha realizado una búsqueda exitosa
        this.showNoSearchText = false;
        this.showNoResults = false;
      })
    }
      
  }
  // onImageSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.selectedImage = e.target.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // saveImageToLocalStorage() {
  //   if (this.selectedImage) {
  //     localStorage.setItem('selectedImage', this.selectedImage);
  //     console.log('Imagen guardada en LocalStorage.');
  //   }
  // }
}
