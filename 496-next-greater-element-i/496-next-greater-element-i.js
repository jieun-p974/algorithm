/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = []; //여기에 결과 저장
    let n = 1;

    // nums1을 순차적으로 반복
    for(let i = 0; i < nums1.length; i++){
      // nums1하나 당 nums2 전체를 반복
      for(let j = 0; j <nums2.length; j++){
        // nums1[i]와 nums2[j]의 값이 같으면 아래의 while문 
        if(nums1[i] === nums2[j]){
          // nums2[j]의 값이 nums2[j+n]보다 작으면 n++, 크면 result[i]에 nums2[j+n]
          while(nums2[j] > nums2[j+n]){
            n++;
          }result[i] = nums2[j+n];
        }
      }
      // result[i]에 값이 없으면 -1 넣어주기
      if(!result[i])
        result[i] = -1;
      n=1;// 다시 반복문을 돌때 다시 하나씩 비교할 수 있게 n=1로 되돌림
    }
    return result;
};