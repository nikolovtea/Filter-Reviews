 function myFunction(){
    var selectedItem1=document.getElementById("rating").value;
    var selectedItem2=document.getElementById("min").value;
    var selectedItem3=document.getElementById("date").value;
    var selectedItem4=document.getElementById("text").value;
    //saving the chosen options from the boxes in variables

    var mydata = JSON.parse('./review.json');//
   

    var min=mydata.filter(minstar=>minstar.rating >= selectedItem2) //in min we save all the reviews above the min wanted rating
    var pom=min;
    
    

    if (selectedItem1=='Highest First'){
        pom.sort(SortOrder("rating")); //to sort them from highest

        if(selectedItem4=='No'){//if this is no we just order them by date-the rating priority is already sorted
            if(selectedItem3=='Newest First'){
                pom.sort(SortOrder("reviewCreatedOnDate"));//sort them from newest dates 
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }
            else{
                pom.reverse(SortOrder("reviewCreatedOnDate"));//sort them from oldest dates
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }
            
        }
        else{
            pom.sort(SortOrder("reviewFullText"));//If the Prioritize by text = Yes
            if(selectedItem3=='Newest First'){
                pom.sort(SortOrder("reviewCreatedOnDate"));//sort them from newest dates 
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }
            else{
                pom.reverse(SortOrder("reviewCreatedOnDate"));//sort them from oldest dates
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }

        }
    }
    else{
        pom.reverse(SortOrder("rating"));// just to reverse the pom arguments from lowest
        if(selectedItem4=='No'){//if this is no we just order them by date-the rating priority is already sorted
            if(selectedItem3=='Newest First'){
                pom.sort(SortOrder("reviewCreatedOnDate"));//sort them from newest dates 
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }
            else{
                pom.reverse(SortOrder("reviewCreatedOnDate"));//sort them from oldest dates
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }
            
        }
        else{
            pom.sort(SortOrder("reviewFullText"));
            if(selectedItem3=='Newest First'){
                pom.sort(SortOrder("reviewCreatedOnDate"));//sort them from newest dates 
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }
            else{
                pom.reverse(SortOrder("reviewCreatedOnDate"));//sort them from oldest dates
                for (var item in pom){
                    console.log("<br>"+pom[item]);
                }
            }


        }

    }
}
function SortOrder(prop){
    return function(a,b){
        if(a[prop]>b[prop]){
            return 1;
        }
        else if(a[prop]<b[prop]){
            return -1;
        }
        return 0;
    }
}