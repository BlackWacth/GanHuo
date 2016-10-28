/**
 * Created by hzw on 2016/10/27.
 * API
 */

var BASE_URL = "http://gank.io/api";
var GET_URL = BASE_URL.concat("/data/Android/10/1");

//error相关
var ERROR_DATA_IS_NULL = "获取数据为空，请重试";

module.exports = {
    BASE_URL: BASE_URL,
    GET_URL: GET_URL,
    ERROR_DATA_IS_NULL: ERROR_DATA_IS_NULL,
};

