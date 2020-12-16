(function () {

    // I tried to make the expenses come from just an array 
    //like in the to do list program but the output wouldn't 
    //show. I googled searched on how to fix it and someone 
    //suggested using local storage.
    var foods = JSON.parse(localStorage.getItem('foods')) || [];

    document.getElementById('fform').addEventListener('submit', function (e) {

        var name = document.getElementById('name').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var afood = document.getElementById('afood').value;
        var number = document.getElementById('number').value;
        var serving = document.getElementById('serving').value;
        var calories = document.getElementById('calories').value;

        var food = {
            name,
            date,
            time,
            afood,
            number,
            serving,
            calories,

            id: foods.length > 0 ? foods[foods.length - 1].id + 1 : 1,
        }

        foods.push(food);
        localStorage.setItem('foods', JSON.stringify(foods));

        document.getElementById('fform').reset();
        showFoods();
    });

    function showFoods() {

        var foodTable = document.getElementById('foodTable');
        foodTable.innerHTML = '';

        if (foods.length > 0) {
            for (let i = 0; i < foods.length; i++) {

                foodTable.appendChild(createDataRow(foods[i]));

            }
        }

    }

    function createDataRow(food) {

        var foodRowEl = document.createElement('TR');

        var foodTdNameEl = document.createElement('TD');
        foodTdNameEl.textContent = food.name;
        foodRowEl.appendChild(foodTdNameEl);

        var foodTdDateEl = document.createElement('TD');
        foodTdDateEl.textContent = food.date;
        foodRowEl.appendChild(foodTdDateEl);

        var foodTdTimeEl = document.createElement('TD');
        foodTdTimeEl.textContent = food.time;
        foodRowEl.appendChild(foodTdTimeEl);

        var foodTdAfoodEl = document.createElement('TD');
        foodTdAfoodEl.textContent = food.afood;
        foodRowEl.appendChild(foodTdAfoodEl);

        var foodTdNumberEl = document.createElement('TD');
        foodTdNumberEl.textContent = food.number;
        foodRowEl.appendChild(foodTdNumberEl);

        var foodTdServingEl = document.createElement('TD');
        foodTdServingEl.textContent = food.serving;
        foodRowEl.appendChild(foodTdServingEl);

        var foodTdCaloriesEl = document.createElement('TD');
        foodTdCaloriesEl.textContent = food.calories;
        foodRowEl.appendChild(foodTdCaloriesEl);

        var foodTdOptionsEl = document.createElement('TD');
        var deleteAnchorEl = document.createElement('A');
        deleteAnchorEl.className = "deleteButton";
        deleteAnchorEl.onclick = function (e) {
            deleteFood(food.id);

            localStorage.setItem('foods', JSON.stringify(foods));
            showFoods();
        }

        deleteAnchorEl.textContent = 'Delete';
        foodRowEl.appendChild(deleteAnchorEl);

        return foodRowEl;
    }

    function deleteFood(id) {
        for (let i = 0; i < foods.length; i++) {
            if (foods[i].id == id) {
                foods.splice(i, 1);
            }
        }
    }

    showFoods();

})();
