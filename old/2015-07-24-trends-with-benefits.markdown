---
layout: post
title:  "Trends with Benefits"
date:   2015-07-29 19:26:43
author: "Itai K."
published: true
categories: computer-vision
thumbnail: /assets/blog/trends-with-benefits/pdp6_crop.jpg
abstract: What happens when you solve a 50 year old puzzle? In the 1960s scientists posed the question of how to get a machine to see and understand the world. Today the era of computer vision is emerging from the lab and into common use.
---

<style>
</style>


<!--
<script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
-->
<script type="text/javascript" src="/highcharts/highcharts.js"></script>
<script type="text/javascript">
/*
$(function() {
	//Width and height
	var w = 500;
	var h = 200;
	var padding = 30;

	var dataset = [[28, 2010], [26, 2011], [15, 2012], [11, 2013], [5, 2014], [3, 2015]];

	//Create scale functions
	var xScale = d3.scale.linear()				
					.domain([2009, 2016])
					.range([1.5*padding, w-padding])

	var yScale = d3.scale.linear()
					.domain([0,30])
					.range([h-padding, padding]);
	
	//Create SVG element
	var svg = d3.select("#chart")
				.append("svg")
				.attr("width", w)
				.attr("height", h);				
				//.attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
    			//.attr('preserveAspectRatio','xMinYMin');

	svg.selectAll("circle")
	   .data(dataset)
	   .enter()
	   .append("circle")
	   .attr("cx", function(d) {	   	
	   		return xScale(d[1]);
	   })
	   .attr("cy", function(d) {	   	
	   		return yScale(d[0]);
	   })
	   .attr("r", 5);
	   
	var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom")
                  .tickValues([2010, 2011, 2012, 2013, 2014, 2015 ])
                  //.ticks(7)
                  .tickFormat(d3.format("04d"));
                  //tickFormat(d3.format(".1%"));
	var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);                  
	
	svg.append("g")	
		.attr("class", "axis")
		.attr("transform", "translate(0," + (h - padding) + ")")
    	.call(xAxis);    
	svg.append("g")
    	.attr("class", "axis")
    	.attr("transform", "translate(" + 1.5*padding + ",0)")
    	.call(yAxis);  

	svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr('y', 0)
        //.attr("y", 0 – padding)
        .attr("x", -h/2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Percent error");  

	svg.append("text")        
        .attr('y', yScale(5)-20)        
        .attr("x", 1.5*padding)
        .attr("dy", "1em")
        .style("fill", "red")
        .style("text-anchor", "left")
        .text("Human-level performance");

    svg.append("line")
    	.attr('x1', 1.5*padding)
    	.attr('y1', yScale(5))
    	.attr('x2', w-padding)
    	.attr('y2', yScale(5))
    	.style("stroke", "rgb(255,0,0)")
    	.style("stroke-dasharray", "5,5");
        //<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />	                

});
*/

$(function () {
     $('#chart2').highcharts({
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




</script>

<div class="image-container">
	<div class="subfigure-container">
		<div class="subfigure">
			<img src="/assets/blog/trends-with-benefits/pdp6_crop.jpg">
		</div>	
	</div>
	<div class="caption">A DEC PDP-6 computer, similar to the one installed in MIT's artificial intelligence lab</div>
</div>

In 1966, MIT professor Seymour Papert proposed a summer undergraduate project to address the nascent field of computer vision. Among its goals was to solve the now classic object recognition problem: 

> The final goal is object identification which will name objects by matching them with a vocabulary of known objects.

This didn't seem like a particularly ambitious objective at the time. The 1960s were a whirlwind era for computers, having seen them developed from vacuum tubes to essentially modern architectures in the span of twenty years. Computer vision too was making strides. Nearly a decade earlier in 1958, Cornell researcher Frank Rosenblatt demonstrated the Perceptron, a machine for automatically classifying simple images. If humans, it was reasoned, can identify shapes and objects then a computer could do the same task easily. These factors led Papert and others to conclude that computer vision would rapidly be automated---another solved problem in a rapidly growing list.

Half a century later we're still working on it.

Papert and his contemporaries failed to realize that the problem they faced was far more complex than turning pixels into labels. It's about turning pixels into abstract concepts that go beyond color, size, or geometry. These concepts challenge our understanding of how we perceive the world. What makes an object an object? Different breeds of dogs, for instance, can look remarkably different but a toddler can distinguish between a dog and cat after only having seen a few examples. 

<div class="image-container">
	<div class="subfigure-container">
		<div class="subfigure">
			<img src="/assets/blog/trends-with-benefits/cat_crop.jpg">			
			<!--<div class="caption"></div>-->
		</div>
		<div class="subfigure">
			<img src="/assets/blog/trends-with-benefits/dog1_crop.jpg">
			<!--<div class="caption"></div>-->
		</div>
		<div class="subfigure">
			<img src="/assets/blog/trends-with-benefits/dog3_crop.jpg">
			<!--<div class="caption"></div>-->
		</div>
	</div>
	<div class="caption">Which of these two objects belong in the same category?</div>
</div>

To an external observer the field has failed to deliver on decades of promises, but in the lab progress had been slow and steady. Numerous algorithms emerged from the lab to revolutionize their respective niches, like David Lowe's SIFT features or the Viola-Jones face detector. The last few years however have seen something profound. Consider the ImageNet challenge, an international competition that pits the latest object recognition algorithms against a challenging dataset. The first few years produced unremarkable results but 2012 saw the reemergance of *deep learning*, a modernization of the 1980s neural network. The technique produced stunning results and in subsequent years accuracy has improved more than in the prior half century. Preliminary results from the 2015 competition suggest that automated object recognition is now on par with human capabilities. 


<div class="chart-wrapper">
    <div class="chart-container" id="chart2"></div>
    <div class="caption">
    	Note the rapid improvement after the 2012 introduction of deep learning. 2015 data is estimated from <a href="http://arxiv.org/pdf/1502.01852.pdf">recent results</a> by Microsoft Research.
    </div>
</div>

As a result of this development and related ones, computer vision applications are starting to trickle into the marketplace. If you've ever deposited a check by taking a picture of it, or had Facebook autotag your images, you've seen some early commercial examples. Future applications will be even more sophisticated. Computer vision will play a significant role in self-driving cars and augmented reality, to name a few examples.

Part of the reason for these recent developments is due to improvements in algorithms. The rigid heuristics used in the 60s gave way to powerful feature descriptors and bag-of-words models which in turn evolved into the convolutional neural networks that currently predominate. Another factor is the emergence of large datasets used for training. No longer confined to toy-size datasets, researchers today have access to million of images thanks to the ubiquity of cameras and social networking. Perhaps most importantly, it is only now that computers are sufficiently powerful to emulate what comes naturally to humans. A 1960s-era PDP-6 could compute about 170,000 instructions per second. A high-end desktop computer circa 2015 is about two million times faster. It's been said that if the techniques of the past were paired with modern datasets and computers, they would have been far more successful. Perhaps Seymour Papert was not overly ambitious, simply ahead of his time. 

<!-- <div class="chart-wrapper"> -->
<div class="grid-container">
    <div class="grid-x grid-padding-x align-center">
    <div class="cell small-6">
        <div class="chart-container" id="chart3"></div>    
    </div>
    </div>
</div>
<!-- </div> -->

In this blog we plan to describe the trends and developments in computer vision and how they can be used. Since each picture tells its own story, we'll use historical data to show how computer vision can reveal previously hidden details. We have a number of interesting topics in the pipeline but if you have suggestions or topics you'd like to see, please leave us a note in the comment section below. 

Let's go exploring.

<!--
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NOTES:
In the intervening years progress came in fits and starts. 
We're just now beginning to fulfill the vision of Papert and others.

![My helpful screenshot](/assets/blog/trends-with-benefits/1966_computer.jpg)

Computer vision is a scientific discipline concerned with converting images into symbolic information. If you've ever deposited a check by taking a picture of it, or had Facebook autotag your images, you've seen some early commercial examples. 
Welcome to the Parallax Trends blog
Here's a bunch of stuff

If you have any comments or topics you'd like to see, leave us a note in the comment section below.
-->
<!--
Who am I
Why am I blogging
What will I be blogging about
How can I leave feedback

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
-->