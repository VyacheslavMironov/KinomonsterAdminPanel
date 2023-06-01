<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 mx-auto">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Описание</th>
              <th scope="col">Рейтинг</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="el in list"
              v-bind:key="el"
            >
              <th scope="row">1</th>
              <td>{{el.name}}</td>
              <td>{{el.description}}</td>
              <td>{{el.rating}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        list: [
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          },
          {
            name: "Фильм года с женщиной", 
            description: "Описание фильма года с женщиной...", 
            rating: 3.14, 
          }
        ]
      }
    }
  }
</script>