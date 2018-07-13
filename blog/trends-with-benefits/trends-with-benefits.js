$(function () {
     $('#chart2').highcharts({
        chart: {
            // height: '100%'
        },
     	credits: {
            enabled: false
        },
        title: {
            text: 'Object Classification Error Rate',            
            x: 0 //x: -20 //center
        },
        subtitle: {
            text: 'Source: www.image-net.org',
            x: 0 //x: -20
        },
        xAxis: {
            //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
   			//			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   			categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Percent error',
                style: {                 
                    fontSize:'14px'
                }
            },
            plotLines: [{
                value: 5.1,
                width: 1,
                //color: '#FF0000',
                color: '#ec2a2a',
                dashStyle: 'longdash'
            }]
        },
        legend: {
        	enabled: false
        },        
        series: [{            
        	name: 'Error (%)',
            data: [28, 25.7, 15.3, 11.1, 7.4, 4.94]            
        }]        
    },
	function(chart) {
		var y = chart.yAxis[0].toPixels(5.1)
		var x = chart.xAxis[0].toPixels(0)
		chart.renderer.label('Human-level performance', x, y)
		.css({
                //color: '#FF0000'
                color: '#ec2a2a'                
            })
        .add();
	});

    var label1;
     $('#chart3').highcharts({ 
        // chart: {
        //     height: 50%
        // },            
     	credits: {
            enabled: true,
            text: "Data: https://www.frc.ri.cmu.edu/~hpm/book97/ch3/processor.list.txt",
            href: "https://www.frc.ri.cmu.edu/~hpm/book97/ch3/processor.list.txt"
        },
        title: {
            text: 'Performance per dollar',            
            x: 0 //x: -20 //center
        },
        /*
        subtitle: {
            text: 'Source: www.image-net.org',
            x: 0 //x: -20
        },
        */
        xAxis: {
            
            type: 'linear'
        },
        yAxis: {
            title: {
                margin: 15,
                text: 'MIPS / $1000 <br/> (2015 $)',
                style: {                 
                    fontSize:'14px'
                }
            },
            labels: {
                formatter: function() {
                    return this.value.toExponential(0); // 2 digits of precision
                    //return Math.log10(this.value)
                }
            },
            type: 'logarithmic'
        },
        legend: {
        	enabled: false
        },    

        series: [{      
            type: 'scatter',      
        	name: 'MIPS / $',
            data: [
                    [1908,0.0000000000000156537603455185],
                    [1919,0.000000000000120640644501103],
                    [1946,0.000000000626582249731003],
                    [1951,0.000000000932400537067952],
                    [1954,0.000000000560283986461962],
                    [1955,0.00000000454884681243999],
                    [1960,0.000000162660861200339],
                    [1964,0.000000124757593800869],
                    [1964,0.000000388003498826844],
                    [1966,0.000000119354748429191],
                    [1967,0.000000100026171058899],
                    [1968,0.000000326528982120418],
                    [1969,0.000000659812876771724],
                    [1977,0.00000162613076188466],
                    [1982,0.0000256377847779744],
                    [1984,0.0000831973261935035],
                    [1988,0.000790127730527271],
                    [1994,0.00779446450068142],
                    [1994,0.00870829826972682],
                    [1999,0.204398756064197],
                    [2002,0.940620784310577],
                    [2006,9.19700078812352],
                    [2005,2.75314748511788],
                    [2005,3.47243826951805],
                    [2005,5.10235827357754],
                    [2006,6.76250057950259],
                    [2006,9.19700078812352],
                    [2006,8.6221882388658],
                    [2007,9.8676154289242],
                    [2007,7.89409234313936],
                    [2007,8.50133021568854],
                    [2008,13.9387116230289],
                    [2008,6.1134700101004],
                    [2008,8.13091511343354],
                    [2009,15.3538780392003],
                    [2009,17.4475886809095],
                    [2009,14.5163937825167],
                    [2010,15.0956537267229],
                    [2010,14.910808987212],
                    [2010,23.0316545430572],
                    [2011,29.616234930523],
                    [2011,37.7606995364168],
                    [2012,46.7088302933853],
                    [2013,28.5920759103905],
                    [2015,277.142857142857],
                    [2013,49.9061688617726],
                    [2013,65.7460646620794],
                    [2014,67.0474649406688],
                    [2014,94.1763754045308],
                    [2014,71.4064278540342],
                    [1986,0.0000261736836267494],
                    [1938,0.000000000000250887573964497],
                    [1939,0.00000000000247953216374269],
                    [1929,0.000000000000351428571428571]
                  ]            
              
        }]        
    },
	function(chart) {
        chart.series[0].points[8].update({
                        marker: {
                            fillColor: "#FF0000"
                        },
                        dataLabels: {
                            enabled: true,
                            align: 'left',
                            style: {
                                fontWeight: 'bold'
                            },
                            format: 'PDP-6',
                            x: -25,
                            y: -15,
                            verticalAlign: 'middle',
                            overflow: true,
                            crop: false
                        }
                    });
        /*
	   // post-render stuff goes here       
       var point = chart.series[0].points[8];
        label1 = chart.renderer.label('PDP-6', point.plotX + chart.plotLeft-30, point.plotY + chart.plotTop-35, 'callout', point.plotX + chart.plotLeft, point.plotY + chart.plotTop, false, true)
            .css({
                color: '#FFFFFF'
            })
            .attr({
                fill: 'rgba(0, 0, 0, 0.75)',
                padding: 8,
                r: 5,
                zIndex: 6
            })
            .add();            
            */
	});

});


