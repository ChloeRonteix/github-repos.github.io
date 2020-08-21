const groupByLanguage = (data) => {
  key = "language";
  const result = data.reduce((sum, current) => {
    if(!sum[current[key]]) {
      sum[current[key]] = 0;
    }
    sum[current[key]] += 1;
    return sum;
  },{});
  const solutions = Object.keys(result).map((key) => {
    return { name: key, y: result[key] }
  });
  return solutions
};

const sizeByDate = (data) => {
  return data.map( current => [Date.parse(current.created_at), current.size]).sort();
};

const graphBoxes = document.querySelectorAll("div.graph-box")
graphBoxes.forEach((graphbox) => {
  //console.dir(graphbox.querySelectorAll("div.graph"));
  element = graphbox.querySelectorAll("div.graph");
  console.dir(element);
  //element.addEventListener("click", () => {
    //console.dir("clicked element")})
  });
//console.dir(graphBoxes)

// Exemple de forEach
const ducks = ["Audrey", "Bob", "Coco"]
ducks.forEach((duck) => { console.log(duck) });


const url = "https://api.github.com/users/joz84/repos";

Highcharts.getJSON(url,
  function (data) {
    //console.dir(data)
    //console.dir(sizeByDate(data))
    const firstFormatedData = sizeByDate(data)
    //console.dir(groupByLanguage(data))
    const secondFormatedData = groupByLanguage(data)
  

    // Step 1: obtenir un tableau "firstFormatedData" qui regroupe les infos de date de création et de taille du code de chaque repo. Il doit avoir la forme suivante :
    // const firstFormatedData = [
    //     [1246406400000, 21.5],
    //     [1246492800000, 22.1],
    //     [1246579200000, 23]
    // ]


    // Step 2: Adapter le graphique suivant https://codepen.io/Joz84/pen/QWNGOvB pour faire aparaitre la taille des repos de Joz84 en fonction de la date.

  
  Highcharts.chart('graph1', {
  
    title: {
      text: 'Nombre de repo github de Jo'
    },
  
    xAxis: {
      type: 'datetime',
      accessibility: {
        rangeDescription: 'Range: Jul 1st 2009 to Jul 31st 2009.'
      }
    },
  
    yAxis: {
      title: {
        text: null
      }
    },
  
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C'
    },
  
    series: [{
      name: 'Temperature',
      data: firstFormatedData,
      zIndex: 1,
      marker: {
        fillColor: 'white',
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[0]
      }
    }]
  });

    // Step 3: obtenir un tableau "secondFormatedData" qui regroupe le nombre de repos en fonction du langage utilisé. il doit être de la forme suivante :
    // const firstFormatedData = [{
    //   name: 'Ruby',
    //   y: 61.41,
    // }, {
    //   name: 'JS',
    //   y: 11.84
    // }, {
    //   name: 'Python',
    //   y: 10.85
    // }]

    // Step 4: Adapter le graphique suivant https://codepen.io/Joz84/pen/mdPOqmm pour faire aparaitre la taille des repos de Joz84 en fonction de la date.

// Build the chart
Highcharts.chart('graph2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Browser market shares in January, 2018'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: secondFormatedData
  }]
});

  }
);

// Step 5: retrouver et stocker dans un tableau nommé "graphBoxes" tous les éléments (boxes) regroupant les infos d'un graph (les elements aillant la class "graph-box").
// Step 6: Itérer (avec forEach) sur ce tableau
// Step 6a    Pour chaque box, retrouver la div (graph) que l'on souhaite cacher (la div aillant la classe "graph").
// Step 6b    Mettre un ecouteur sur chaque box, pour que lorsque l'utilisateur click on ajoute/enlève (indice toggle) la classe "d-none" a élément graph de cette box.

