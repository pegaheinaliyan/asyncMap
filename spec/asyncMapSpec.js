(function () {
  'use strict';

  describe('asyncMap', () => {

    it('should exist', () => {
      expect(asyncMap).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof asyncMap).toBe('function');
    });


    it('should pass the completed tasks to its callback', (done) => {
      let res;
      function wait2For2(callback){
        setTimeout(() => {
          callback(2);
        }, 200);
      }

      function wait3For1(callback){
        setTimeout(() => {
          callback(1);
        }, 300);
      }

      asyncMap([wait2For2, wait3For1], (arr) => {
        res = arr;
        expect(res).toEqual([2, 1]);
        expect(res.length).toEqual(2);
        done();
      });

    });

    it('should pass the completed tasks to its callback in the correct order', (done) => {
      let res;
      function wait2For2(callback){
        setTimeout(() => {
          callback(2);
        }, 200);
      }

      function wait3For1(callback){
        setTimeout(() => {
          callback(1);
        }, 300);
      }

      asyncMap([wait3For1, wait2For2], (arr) => {
        res = arr;
        expect(res).toEqual([1, 2]);
        done();
      });

    });

    it('should handle more than two async functions in the correct order', (done) => {
      let res;
      function wait2For2(callback){
        setTimeout(() => {
          callback(2);
        }, 200);
      }

      function wait5For4(callback){
        setTimeout(() => {
          callback(4);
        }, 500);
      }

      function wait1For3(callback){
        setTimeout(() => {
          callback(3);
        }, 100);
      }

      function wait3For1(callback){
        setTimeout(() => {
          callback(1);
        }, 300);
      }

      function wait1For5(callback){
        setTimeout(() => {
          callback(5);
        }, 100);
      }

      asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], (arr) => {
        res = arr;
        expect(res).toEqual([1, 2, 3, 4, 5]);
        done();
      });
    });

  });

}());
