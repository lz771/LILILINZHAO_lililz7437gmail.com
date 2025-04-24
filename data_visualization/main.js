new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"],
      datasets: [
        {
          label: "Number of FDNY firehouses",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [66,51,48,34,20]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'FDNY Firehouses in NYC, by Lili Lin Zhao'
      }
    }
});


new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"],
    datasets: [
      {
        label: "Number of FDNY firehouses",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [66,51,48,34,20]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'FDNY Firehouses in NYC, by Lili Lin Zhao'
    }
  }
});
