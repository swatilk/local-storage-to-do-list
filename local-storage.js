$(function(){
        $(document).ready(function(){
                ItemList = getItems('keys');
                displayItems(ItemList);
        });
		var item = $("#newItem"),
            index;
        //Add to-do item to the list
		$("#addItem").on('click touchstart', function(event){
            if(item.val() != ''){
                console.log("if",item.val());$(function(){
        $(document).ready(function(){
                ItemList = getItems('keys');
                displayItems(ItemList);
        });
		var item = $("#newItem"),
            index;
        //Add to-do item to the list
		$("#addItem").on('click touchstart', function(event){
            if(item.val() != ''){
                console.log("if",item.val());
                ItemList.push(item.val());
                item.val('');
                displayItems(ItemList);
                populateStorage('keys', ItemList);
                event.preventDefault();
                return false;
            }
            else{
                console.log("else",item.val());
                alert("Please enter a value");
                item.val('');
                event.preventDefault();
                return false;
            }
		});
		$("ul").delegate('a.edit','click touchstart',function(event){
            console.log("inside edit");
            index = $("li").index(this.closest("li"));
            console.log(index);
            var parent = ItemList[index];
            console.log(parent);
            $("#editArea").val(parent);
            console.log($("#editArea").val());
            event.preventDefault();

		});

        $("#saveEdit").on('click touchstart', function(event){
            console.log("inside save");
                ItemList[index] = $("#editArea").val();
                displayItems(ItemList);
                populateStorage('keys', ItemList);
                $('#editPop').modal('hide');
                event.preventDefault();
        });


        $('#editPop').on('shown.bs.modal', function () {
            $('#editArea').focus()
        })

        //delete a list item
        $("#toDoItemList").delegate('a.close','tap click',function(event){
                if($(this).closest("li").hasClass('list')){
                    index = $("li").index(this.closest("li"));
                    this.closest("li").remove("li");
                    ItemList.splice(index, 1);
                    populateStorage('keys', ItemList);
                    event.preventDefault();
                    return false;
                }
                event.preventDefault();
                return false;
        });
        //retrieve the array of items from local storage
        function getItems(key){
            if(localStorage[key]){
                return JSON.parse(localStorage[key]);
            }
            else {
                return [ ];
            }
        }
        //display the to-do items
        function displayItems(arrayItems){
            $('li').remove();
            if(arrayItems.length > 0){
                for(var i=0; i<arrayItems.length;i++){
                    $("#toDoItemList").append('<li class="list list-group-item">'+
                        '<a href="#" data-toggle="modal" data-target="#editPop" '+
                        'class="edit"><span class="glyphicon glyphicon-edit" '+
                        'aria-hidden="true"></span></a>'+ arrayItems[i] +
                        '<a href="#" class="close"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></a>'+
                        '</li>');
                    }
                }
                else {
                    return;
                }
        }
		function populateStorage(ind, setItems){
            localStorage[ind] = JSON.stringify(setItems);
         }
    });
                ItemList.push(item.val());
                item.val('');
                displayItems(ItemList);
                populateStorage('keys', ItemList);
                event.preventDefault();
                return false;
            }
            else{
                console.log("else",item.val());
                alert("Please enter a value");
                item.val('');
                event.preventDefault();
                return false;
            }
		});
		$("ul").delegate('li','click touchstart',function(event){
            console.log("inside edit");
            index = $("li").index(this.closest("li"));
            console.log(index);
            var parent = ItemList[index];
            console.log(parent);
            $("#editArea").val(parent);
            if(!($('#editPop').modal('show'))){
                $('#editPop').modal('show');
            }
            console.log($("#editArea").val());
            event.preventDefault();

		});
        $("li").delegate('a.edit','click touchstart', function(event){
            index = $("li").index(this.closest("li"));
            console.log(index);
            var parent = ItemList[index];
            console.log(parent);
            $("#editArea").val(parent);
            if(($('#editPop').modal('show'))){
                $('#editPop').modal('show');
            }
            console.log($("#editArea").val());
            event.preventDefault();
        });

        $("#saveEdit").on('click touchstart', function(event){
            console.log("inside save");
                ItemList[index] = $("#editArea").val();
                displayItems(ItemList);
                populateStorage('keys', ItemList);
                $('#editPop').modal('hide');
                event.preventDefault();
        });


        $('#editPop').on('shown.bs.modal', function () {
            $('#editArea').focus()
        })

        //delete a list item
        $("#toDoItemList").delegate('a.close','tap click',function(event){
                if($(this).closest("li").hasClass('list')){
                    index = $("li").index(this.closest("li"));
                    this.closest("li").remove("li");
                    ItemList.splice(index, 1);
                    populateStorage('keys', ItemList);
                    event.preventDefault();
                    return false;
                }
                event.preventDefault();
                return false;
        });
        //retrieve the array of items from local storage
        function getItems(key){
            if(localStorage[key]){
                return JSON.parse(localStorage[key]);
            }
            else {
                return [ ];
            }
        }
        //display the to-do items
        function displayItems(arrayItems){
            $('li').remove();
            if(arrayItems.length > 0){
                for(var i=0; i<arrayItems.length;i++){
                    $("#toDoItemList").append('<li class="list list-group-item"><a href="#" class="edit">'+ arrayItems[i] +
                        '</a><a href="#" class="close"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></a></li>');
                    /*<a href="#" data-toggle="modal" data-target="#editPop" class="edit"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>*/
                    }
                }
                else {
                    return;
                }
        }
		function populateStorage(ind, setItems){
            localStorage[ind] = JSON.stringify(setItems);
         }
    });
