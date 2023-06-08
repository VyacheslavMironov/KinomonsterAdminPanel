<template>
    <div class="container mx-auto">
        <canvas id="chart"></canvas >
        <hr>
        <div class="mb-4">
            <div class="row">
                <div class="col-10"></div>
                <div class="col-2">
                    <a href="#" class="btn btn-success">Добавить фильм</a>
                </div>
            </div>
            <div class="mb-2">
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
                        <tr>
                            <td>Аватар</td>
                            <td>10.2</td>
                            <td>1985</td>
                            <td>Михалков Н.С</td>
                            <td>Детектив</td>
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