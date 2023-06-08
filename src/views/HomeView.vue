<template>
    <div class="container mx-auto">
        <canvas id="chart"></canvas >
        <hr>
        <div class="mb-4">
            <div class="row">
                <div class="col-10"></div>
                <div class="col-2">
                    <router-link
                        to="/create/movie"
                        class="btn btn-success"
                        aria-current="page"
                    >
                        Добавить фильм
                    </router-link>
                </div>
            </div>
            <div class="mt-4 mb-2">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">НАЗВАНИЕ</th>
                            <th scope="col">РЕЙТИНГ</th>
                            <th scope="col">ГОД ВЫХОДА</th>
                            <th scope="col">РЕЖИСЁР</th>
                            <th scope="col">ЖАНР</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="el in list"
                            v-bind:key="el"
                        >
                            <td>{{ el.name }}</td>
                            <td>{{ el.rating }}</td>
                            <td>{{ el.year }}</td>
                            <td>{{ el.director }}</td>
                            <td>{{ el.genre }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    import { getRelativePosition } from 'chart.js/helpers';


    export default{
        data()
        {
            return {
                list: [
                    {
                        name: "Фильм года с женщиной", 
                        rating: 3.14,
                        year: '1985',
                        genre: "Ужасы",
                        director: "Михалков Н.С"
                    },
                    {
                        name: "Фильм года с женщиной", 
                        rating: 3.14,
                        year: '1985',
                        genre: "Ужасы",
                        director: "Михалков Н.С"
                    },
                    {
                        name: "Фильм года с женщиной", 
                        rating: 3.14,
                        year: '1985',
                        genre: "Ужасы",
                        director: "Михалков Н.С"
                    },
                    {
                        name: "Фильм года с женщиной", 
                        rating: 3.14,
                        year: '1985',
                        genre: "Ужасы",
                        director: "Михалков Н.С"
                    },
                    {
                        name: "Фильм года с женщиной", 
                        rating: 3.14,
                        year: '1985',
                        genre: "Ужасы",
                        director: "Михалков Н.С"
                    },
                    {
                        name: "Фильм года с женщиной", 
                        rating: 3.14,
                        year: '1985',
                        genre: "Ужасы",
                        director: "Михалков Н.С"
                    }
                ]
            }
        },
        methods: {
            diagram: () => {
                const chart = new Chart(document.querySelector('#chart'),
                {
                    type: 'bar',
                    data: {
                        labels: ['Ужасы', 'Док. фильмы', 'Комедии', 'Боевик', 'Меллодрамы', 'Триллер'],
                        datasets: [{
                            label: 'График популярности жанров',
                            data: [12, 19, 9, 5, 20, 13],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: true,
                                labels: {
                                    color: 'rgb(0, 0, 0)'
                                }
                            }
                        },
                        animations: {
                            tension: {
                                duration: 1000,
                                easing: 'linear',
                                from: 1,
                                to: 0,
                                loop: true
                            }
                        },
                        onClick: (e) => {
                        const canvasPosition = getRelativePosition(e, chart);

                        // Substitute the appropriate scale IDs
                        const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                        const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
                        }
                    }
                });
                
            }
        },
        mounted()
        {
            this.diagram()
        }
    }
</script>