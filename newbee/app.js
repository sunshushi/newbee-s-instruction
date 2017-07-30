var app = angular.module("applyform",
	["mainCtrl",'donglinCtrls','goldCtrls','nanwangCtrls','pointstoneCtrls','formCtrls',"w5c.validator",'ui.router','ngAnimate'])

window.app = app;




//主页controller 部分
var appCtrl = angular.module("mainCtrl",['w5c.validator']);


appCtrl.controller("mainCtrl",['$scope','$window','$document',
    function($scope,$window,$document){
        $scope.scrollTop = 0;

        $scope.nanwanghide = false;
        $scope.donglinhide = true;
        $scope.pointstonehide = true;
        $scope.goldhide = true;

        $scope.nextpage = function(ele){
            if(ele == "nanwanghide")
            {
                $scope.nanwanghide = true;
                $scope.donglinhide = false
            }
            else if(ele == "donglinhide"){
                $scope.donglinhide = true;
                $scope.goldhide = false;
            }
            else if(ele == "goldhide"){
                $scope.goldhide = true;
                $scope.pointstonehide = false;
            }
            else if(ele =="pointstonehide"){
                $scope.pointstonehide = true;
                $scope.nanwanghide = false;
            }
        }
        $scope.lastpage = function(ele){
            if(ele == "nanwanghide")
            {
                $scope.nanwanghide = true;
                $scope.pointstonehide  = false;
            }
            else if(ele == "donglinhide"){
                $scope.donglinhide = true;
                $scope.nanwanghide = false;
            }
            else if(ele == "goldhide"){
                $scope.goldhide = true;
                $scope.donglinhide = false;
            }
            else if(ele =="pointstonehide"){
                $scope.pointstonehide = true;
                $scope.goldhide = false;
            }
        }



        $scope.init = function(){
          $scope.pageClass = 'ng-enter';
        }
        $scope.hide = function(url){
          $scope.pageClass = 'ng-leave';
          setTimeout(function(){
            $window.location="#/" + url;
          },900)
          
       };


    }
])




//directive部分
appCtrl.directive('changepage',function($window){
    return {
        restrict: 'AE',
        link:function(scope,element,attrs){
           
        }
    }
})

//表单验证config部分
		app.config(["w5cValidatorProvider", function (w5cValidatorProvider) {
            // 全局配置
            w5cValidatorProvider.config({
                blurTrig:true,
                showError:function(elem,errorMessage){
                    elem.$invalid = true;
                    elem.title = errorMessage;
                },
                removeError:function (elem) {
                    elem.title = ''
                }
            });
            w5cValidatorProvider.setRules({
                company_name:{
                    required:"请输入公司全称",
                    minlength:"请输入正确的名字，不能少于{minlength}字"
                },
                company_website:{
                    required:"请输入公司网址",
                    url:"输入url格式不正确"
                },
                company_introduction:{
                    required:"请输入公司介绍",
                    maxlength:"描述最多不能超过{maxlength}字"
                },
                company_address:{
                    required:"请输入公司地址",
                    maxlength:"地址不要超过{maxlength}字"
                },
                linkman:{
                    required:"请输入联系人",
                    minlength:"请输入正确姓名，至少{minlength}个字",
                    maxlength:"请不要输入过多的姓名，至多{maxlength}字"
                },
                contact_number:{
                    required:"请输入联系方式（手机号码）",
                    number:"请输入数字手机号码"
                },
                corporate_account_bank:{
                    required:"请输入开户银行"
                },
                coporate_account_name:{
                    required:"请输入开户名",
                    minlength:"请输入正确姓名,不少于{minlength}字"
                },
                coporate_account_number:{
                    required:"请输入对公账号",
                    number:"请输入数字对公账号"
                },
                company_reg_name:{
                    required:"请输入企业注册名称",
                    minlength:"请输入正确的注册姓名，不得少于{minlength}字"
                },
                business_license_number:{
                    required:"请输入工商营业执照注册号",
                    number:"请输入数字注册号"
                }
            })
        }]);