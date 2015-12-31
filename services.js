/**
 * Created by Pandey on 12/31/2015.
 */

exports.$response = function($http) {
    var res = {};

    $http.
        get('http://api.clozerr.com/v2/auth/login/facebook/?token=CAAJJHUzbXhsBAPe3kgz5UbPhvtzGxyIpVETCRYZAUKRhJqoGDEl8sZCLb6AmsQNZC9KtYVOs0m5b25jcZAI6SkSCdlDdGQZAM8k1iIA1MpZCk4rboced31uh0zZCJxoEKNI81QuaU7EiSe9hE7ZA5uYn8Fox5JSpyobaxhVVWsG6v0nUVst2EZCJV').
        success(function(data) {
            res = data;
            //console.log(res);

        });

    return {
        res:res
    };
};

