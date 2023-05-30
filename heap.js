// left child = i*2
// right child = i*2+1
// parent = i/2


let Minheap =  function(){
    let heap = [null]

    this.insert = function(num){
        heap.push(num);
        if(heap.length>2){
           let index = heap.length-1;
           while(heap[index]<heap[Math.floor(index/2)]){
            if(index >= 1){
                [heap[Math.floor(index/2)],heap[index]] = [heap[index], heap[Math.floor(index/2)]];
                if(Math.floor(index/2)>1){
                    index = Math.floor(index/2)
                }else{
                    break;
                }
            }
           }
        }
    }



    this.remove = function(){
        let smallest = heap[1];
        if(heap.length > 2){
            heap[1] = heap[heap.length-1];
            heap.splice(heap.length-1)
            if(heap.length === 3){
                if(heap[1] > heap[2]){
                    [heap[1],heap[2]] = [heap[2], heap[1]]
                }
                return smallest
            }
            let i = 1;
            let left = 2*i;
            let right = 2*i+1;
            while(heap[i] >= heap[left] || heap[i]>= heap[right]){
                if(heap[left] < heap[right]){
                    [heap[i], heap[left]] = [heap[left],heap[i]];
                    i = 2*i
                }else{
                    [heap[i],heap[right]] = [heap[right], heap[i]]
                     i = 2*i+1;
                }
                left = 2*i;
                right = 2*i+1;
                if(heap[left] === undefined || heap[right] === undefined){
                    break;
                }
            }
        }
        else if(heap.length === 2){
            heap.splice(1,1)
        }else{
            return null;
        }
        return smallest;
    }


    this.sort = function(){
        let result = new Array();
        while(heap.length > 1){
            result.push(this.remove())
        }
        return result
    }

    this.print = function(){
        console.log(heap.slice(1));
    }

}

let heaps =  new Minheap()

heaps.insert(67)
heaps.insert(32)
heaps.insert(12)
heaps.insert(18)
heaps.insert(76)
heaps.insert(99)
heaps.insert(45)
// console.log(heaps.remove());
// console.log(heaps.sort())
heaps.print()



let Maxheap = function() {
    let heap = [null];

    this.insert = function(num) {
        heap.push(num);
        if (heap.length > 2) {
            let index = heap.length - 1;
            while (heap[index] > heap[Math.floor(index / 2)]) {
                if (index >= 1) {
                    [heap[Math.floor(index / 2)], heap[index]] = [heap[index], heap[Math.floor(index / 2)]];
                    if (Math.floor(index / 2) > 1) {
                        index = Math.floor(index / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    };

    this.remove = function() {
        let largest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length === 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return largest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] === undefined || heap[right] === undefined) {
                    break;
                }
            }
        } else if (heap.length === 2) {
            heap.splice(1, 1);
        } else {
            return null;
        }
        return largest;
    };

    this.sort = function() {
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove());
        }
        return result;
    };

    this.print = function() {
        console.log(heap.slice(1));
    };
};

let heap = new Maxheap();
// heap.insert(67);
// heap.print();
