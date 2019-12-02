var $B = __BRYTHON__;
var $bltns = __BRYTHON__.InjectBuiltins();eval($bltns);

var $locals = $locals___main__;
$locals___main__["__package__"] = ""
$locals.__annotations__ = _b_.dict.$factory()
var $top_frame = ["__main__", $locals___main__, "__main__", $locals___main__]
$B.frames_stack.push($top_frame)
var $stack_length = $B.frames_stack.length;
try{
    ;$locals.$line_info = "1,__main__";
    '\n\
BreezySLAM: Simple, efficient SLAM in Python\n\
vehicles.py: odometry models for different kinds of vehicles\n\
(currently just wheeled vehicles)\n\
Copyright (C) 2014 Suraj Bajracharya and Simon D. Levy\n\
This code is free software: you can redistribute it and/or modify\n\
it under the terms of the GNU Lesser General Public License as \n\
published by the Free Software Foundation, either version 3 of the \n\
License, or (at your option) any later version.\n\
This code is distributed in the hope that it will be useful,     \n\
but WITHOUT ANY WARRANTY without even the implied warranty of\n\
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n\
GNU General Public License for more details.\n\
You should have received a copy of the GNU Lesser General Public License \n\
along with this code.  If not, see <http:#www.gnu.org/licenses/>.\n\
';
    ;$locals.$line_info = "18,__main__";
    $B.$import("math", [],{},$locals___main__, true);None;;
    ;$locals.$line_info = "20,__main__";
    var $WheeledVehicle_168 = (function(){
        var $locals___main___WheeledVehicle_168 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___WheeledVehicle_168, 
            $local_name = "$locals___main___WheeledVehicle_168",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "21,__main__";
        '\n\
    An abstract class supporting ododmetry for wheeled robots.  Your implementing\n\
    class should provide the method:\n\
    \n\
      extractOdometry(self, timestamp, leftWheel, rightWheel) --> \n\
        (timestampSeconds, leftWheelDegrees, rightWheelDegrees)      \n\
    ';
        ;$locals.$line_info = "29,__main__";
        var __init__$201 = function($defaults){function __init__201(self, wheelRadiusMillimeters, halfAxleLengthMillimeters){
            var $locals___main___WheeledVehicle_168___init___169 = {},
                $local_name = "__main___WheeledVehicle_168___init___169",
                $locals = $locals___main___WheeledVehicle_168___init___169;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___WheeledVehicle_168___init___169 = $locals = $B.args("__init__", 3, {self:null, wheelRadiusMillimeters:null, halfAxleLengthMillimeters:null}, ["self", "wheelRadiusMillimeters", "halfAxleLengthMillimeters"], arguments, $defaults, null, null);
            }
            else{
                if($len == 3){
                    $locals___main___WheeledVehicle_168___init___169 = $locals = {self:self, wheelRadiusMillimeters:wheelRadiusMillimeters, halfAxleLengthMillimeters:halfAxleLengthMillimeters}
                }
                else if($len > 3){$B.wrong_nb_args("__init__", $len, 3, ["self","wheelRadiusMillimeters","halfAxleLengthMillimeters"])}
                else if($len + $nb_defaults < 3){$B.wrong_nb_args("__init__", $len, 3, ["self","wheelRadiusMillimeters","halfAxleLengthMillimeters"])}
                else{
                    $locals___main___WheeledVehicle_168___init___169 = $locals = {self:self, wheelRadiusMillimeters:wheelRadiusMillimeters, halfAxleLengthMillimeters:halfAxleLengthMillimeters}
                    var defparams = ["self","wheelRadiusMillimeters","halfAxleLengthMillimeters"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__201]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["WheeledVehicle"]
                $B.js_this = this;
                ;$locals.$line_info = "30,__main__";
                '\n\
        wheelRadiusMillimeters    radius of each odometry wheel   \n\
        halfAxleLengthMillimeters half the length of the axle between the odometry wheels  \n\
        ';
                ;$locals.$line_info = "34,__main__";
                $B.$setattr($locals["self"],"wheelRadiusMillimeters",$locals["wheelRadiusMillimeters"]);None;;
                ;$locals.$line_info = "35,__main__";
                $B.$setattr($locals["self"],"halfAxleLengthMillimeters",$locals["halfAxleLengthMillimeters"]);None;;
                ;$locals.$line_info = "37,__main__";
                $B.$setattr($locals["self"],"timestampSecondsPrev",$B.builtins.None);None;;
                ;$locals.$line_info = "38,__main__";
                $B.$setattr($locals["self"],"leftWheelDegreesPrev",$B.builtins.None);None;;
                ;$locals.$line_info = "39,__main__";
                $B.$setattr($locals["self"],"rightWheelDegreesPrev",$B.builtins.None);None;;
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__201.$is_func = true
        __init__201.$infos = {
            __name__:"__init__",
            __qualname__:"WheeledVehicle.__init__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        wheelRadiusMillimeters    radius of each odometry wheel   \n\
        halfAxleLengthMillimeters half the length of the axle between the odometry wheels  \n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:3,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:29,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 3,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "wheelRadiusMillimeters", "halfAxleLengthMillimeters"]
            )}
        };None;
        return __init__201}
        $locals___main___WheeledVehicle_168["__init__"] = __init__$201({})
        $locals___main___WheeledVehicle_168["__init__"].$set_defaults = function(value){return $locals___main___WheeledVehicle_168["__init__"] = __init__$201(value)}
        ;$locals.$line_info = "41,__main__";
        var __str__$202 = function($defaults){function __str__202(self){
            var $locals___main___WheeledVehicle_168___str___170 = {},
                $local_name = "__main___WheeledVehicle_168___str___170",
                $locals = $locals___main___WheeledVehicle_168___str___170;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___WheeledVehicle_168___str___170 = $locals = $B.args("__str__", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___WheeledVehicle_168___str___170 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("__str__", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("__str__", $len, 1, ["self"])}
                else{
                    $locals___main___WheeledVehicle_168___str___170 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __str__202]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["WheeledVehicle"]
                $B.js_this = this;
                ;$locals.$line_info = "43,__main__";
                var $res = $B.rich_op("mod", '<Wheel radius=%f mm Half axle Length=%f mm>', $B.fast_tuple([$B.$getattr($locals["self"],"wheelRadiusMillimeters"),$B.$getattr($locals["self"],"halfAxleLengthMillimeters")]));$B.leave_frame("__main___WheeledVehicle_168___str___170");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __str__202.$is_func = true
        __str__202.$infos = {
            __name__:"__str__",
            __qualname__:"WheeledVehicle.__str__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:41,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__str__",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return __str__202}
        $locals___main___WheeledVehicle_168["__str__"] = __str__$202({})
        $locals___main___WheeledVehicle_168["__str__"].$set_defaults = function(value){return $locals___main___WheeledVehicle_168["__str__"] = __str__$202(value)}
        ;$locals.$line_info = "46,__main__";
        var __repr__$203 = function($defaults){function __repr__203(self){
            var $locals___main___WheeledVehicle_168___repr___171 = {},
                $local_name = "__main___WheeledVehicle_168___repr___171",
                $locals = $locals___main___WheeledVehicle_168___repr___171;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___WheeledVehicle_168___repr___171 = $locals = $B.args("__repr__", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___WheeledVehicle_168___repr___171 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("__repr__", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("__repr__", $len, 1, ["self"])}
                else{
                    $locals___main___WheeledVehicle_168___repr___171 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __repr__203]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["WheeledVehicle"]
                $B.js_this = this;
                ;$locals.$line_info = "48,__main__";
                var $res = $B.$call($B.$getattr($locals["self"],"__str__"))();$B.leave_frame("__main___WheeledVehicle_168___repr___171");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __repr__203.$is_func = true
        __repr__203.$infos = {
            __name__:"__repr__",
            __qualname__:"WheeledVehicle.__repr__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:46,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__repr__",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return __repr__203}
        $locals___main___WheeledVehicle_168["__repr__"] = __repr__$203({})
        $locals___main___WheeledVehicle_168["__repr__"].$set_defaults = function(value){return $locals___main___WheeledVehicle_168["__repr__"] = __repr__$203(value)}
        ;$locals.$line_info = "50,__main__";
        var computePoseChange$204 = function($defaults){function computePoseChange204(self, timestamp, leftWheelOdometry, rightWheelOdometry){
            var $locals___main___WheeledVehicle_168_computePoseChange_172 = {},
                $local_name = "__main___WheeledVehicle_168_computePoseChange_172",
                $locals = $locals___main___WheeledVehicle_168_computePoseChange_172;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___WheeledVehicle_168_computePoseChange_172 = $locals = $B.args("computePoseChange", 4, {self:null, timestamp:null, leftWheelOdometry:null, rightWheelOdometry:null}, ["self", "timestamp", "leftWheelOdometry", "rightWheelOdometry"], arguments, $defaults, null, null);
            }
            else{
                if($len == 4){
                    $locals___main___WheeledVehicle_168_computePoseChange_172 = $locals = {self:self, timestamp:timestamp, leftWheelOdometry:leftWheelOdometry, rightWheelOdometry:rightWheelOdometry}
                }
                else if($len > 4){$B.wrong_nb_args("computePoseChange", $len, 4, ["self","timestamp","leftWheelOdometry","rightWheelOdometry"])}
                else if($len + $nb_defaults < 4){$B.wrong_nb_args("computePoseChange", $len, 4, ["self","timestamp","leftWheelOdometry","rightWheelOdometry"])}
                else{
                    $locals___main___WheeledVehicle_168_computePoseChange_172 = $locals = {self:self, timestamp:timestamp, leftWheelOdometry:leftWheelOdometry, rightWheelOdometry:rightWheelOdometry}
                    var defparams = ["self","timestamp","leftWheelOdometry","rightWheelOdometry"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, computePoseChange204]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["WheeledVehicle"]
                $B.js_this = this;
                ;$locals.$line_info = "51,__main__";
                '\n\
        Computes pose change based on odometry.\n\
        \n\
        Parameters:\n\
        \n\
          timestamp          time stamp, in whatever units your robot uses       \n\
          leftWheelOdometry  odometry for left wheel, in whatever form your robot uses       \n\
          rightWheelOdometry odometry for right wheel, in whatever form your robot uses\n\
        \n\
        Returns a tuple (dxyMillimeters, dthetaDegrees, dtSeconds)\n\
        \n\
          dxyMillimeters     forward distance traveled, in millimeters\n\
          dthetaDegrees change in angular position, in degrees\n\
          dtSeconds     elapsed time since previous odometry, in seconds\n\
        ';
                ;$locals.$line_info = "66,__main__";
                $locals___main___WheeledVehicle_168_computePoseChange_172["dxyMillimeters"] = 0;
                ;$locals.$line_info = "67,__main__";
                $locals___main___WheeledVehicle_168_computePoseChange_172["dthetaDegrees"] = 0;
                ;$locals.$line_info = "68,__main__";
                $locals___main___WheeledVehicle_168_computePoseChange_172["dtSeconds"] = 0;
                ;$locals.$line_info = "70,__main__";
                var $right205 = $B.$getattr($B.$iter($B.$call($B.$getattr($locals["self"],"extractOdometry"))($locals["timestamp"], $locals["leftWheelOdometry"], $locals["rightWheelOdometry"])), "__next__");
                var $rlist206=[], $pos=0;while(1){try{$rlist206[$pos++] = $right205()}catch(err){break}}
                if($rlist206.length<3){throw ValueError.$factory("need more than " +$rlist206.length + " value" + ($rlist206.length > 1 ? "s" : "") + " to unpack")}
                if($rlist206.length>3){throw ValueError.$factory("too many values to unpack (expected 3)")}
                ;$locals.$line_info = "70,__main__";
                $locals___main___WheeledVehicle_168_computePoseChange_172["timestampSecondsCurr"] = $rlist206[0];
                ;$locals.$line_info = "70,__main__";
                $locals___main___WheeledVehicle_168_computePoseChange_172["leftWheelDegreesCurr"] = $rlist206[1];
                ;$locals.$line_info = "70,__main__";
                $locals___main___WheeledVehicle_168_computePoseChange_172["rightWheelDegreesCurr"] = $rlist206[2];
                ;$locals.$line_info = "73,__main__";
                if($B.$bool($B.rich_comp("__ne__",$B.$getattr($locals["self"],"timestampSecondsPrev"),$B.builtins.None))){
                    ;$locals.$line_info = "75,__main__";
                    $locals___main___WheeledVehicle_168_computePoseChange_172["leftDiffDegrees"] = $B.rich_op("sub", $locals["leftWheelDegreesCurr"], $B.$getattr($locals["self"],"leftWheelDegreesPrev"));
                    ;$locals.$line_info = "76,__main__";
                    $locals___main___WheeledVehicle_168_computePoseChange_172["rightDiffDegrees"] = $B.rich_op("sub", $locals["rightWheelDegreesCurr"], $B.$getattr($locals["self"],"rightWheelDegreesPrev"));
                    ;$locals.$line_info = "78,__main__";
                    $locals___main___WheeledVehicle_168_computePoseChange_172["dxyMillimeters"] = $B.rich_op("mul", $B.$getattr($locals["self"],"wheelRadiusMillimeters"), $B.add($B.$call($B.$getattr($locals___main__["math"],"radians"))($locals["leftDiffDegrees"]), $B.$call($B.$getattr($locals___main__["math"],"radians"))($locals["rightDiffDegrees"])));
                    ;$locals.$line_info = "81,__main__";
                    $locals___main___WheeledVehicle_168_computePoseChange_172["dthetaDegrees"] = $B.rich_op("mul", $B.rich_op("truediv", $B.$call($B.builtins.float)($B.$getattr($locals["self"],"wheelRadiusMillimeters")), $B.$getattr($locals["self"],"halfAxleLengthMillimeters")), (typeof $locals["rightDiffDegrees"].valueOf() == "number" && typeof $locals["leftDiffDegrees"].valueOf() == "number" ? (typeof $locals["rightDiffDegrees"] == "number" && typeof $locals["leftDiffDegrees"] == "number" ? $B.sub($locals["rightDiffDegrees"],$locals["leftDiffDegrees"]) : new Number($B.sub($locals["rightDiffDegrees"],$locals["leftDiffDegrees"]))): $B.rich_op("sub",$locals["rightDiffDegrees"],$locals["leftDiffDegrees"])));
                    ;$locals.$line_info = "84,__main__";
                    $locals___main___WheeledVehicle_168_computePoseChange_172["dtSeconds"] = $B.rich_op("sub", $locals["timestampSecondsCurr"], $B.$getattr($locals["self"],"timestampSecondsPrev"));
                }
                ;$locals.$line_info = "87,__main__";
                $B.$setattr($locals["self"],"timestampSecondsPrev",$locals["timestampSecondsCurr"]);None;;
                ;$locals.$line_info = "88,__main__";
                $B.$setattr($locals["self"],"leftWheelDegreesPrev",$locals["leftWheelDegreesCurr"]);None;;
                ;$locals.$line_info = "89,__main__";
                $B.$setattr($locals["self"],"rightWheelDegreesPrev",$locals["rightWheelDegreesCurr"]);None;;
                ;$locals.$line_info = "92,__main__";
                var $res = $B.fast_tuple([$locals["dxyMillimeters"],$locals["dthetaDegrees"],$locals["dtSeconds"]]);$B.leave_frame("__main___WheeledVehicle_168_computePoseChange_172");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        computePoseChange204.$is_func = true
        computePoseChange204.$infos = {
            __name__:"computePoseChange",
            __qualname__:"WheeledVehicle.computePoseChange",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Computes pose change based on odometry.\n\
        \n\
        Parameters:\n\
        \n\
          timestamp          time stamp, in whatever units your robot uses       \n\
          leftWheelOdometry  odometry for left wheel, in whatever form your robot uses       \n\
          rightWheelOdometry odometry for right wheel, in whatever form your robot uses\n\
        \n\
        Returns a tuple (dxyMillimeters, dthetaDegrees, dtSeconds)\n\
        \n\
          dxyMillimeters     forward distance traveled, in millimeters\n\
          dthetaDegrees change in angular position, in degrees\n\
          dtSeconds     elapsed time since previous odometry, in seconds\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:4,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:50,
                co_flags:67,
                co_freevars: ["math"],
                co_kwonlyargcount:0,
                co_name: "computePoseChange",
                co_nlocals: 4,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "timestamp", "leftWheelOdometry", "rightWheelOdometry"]
            )}
        };None;
        return computePoseChange204}
        $locals___main___WheeledVehicle_168["computePoseChange"] = computePoseChange$204({})
        $locals___main___WheeledVehicle_168["computePoseChange"].$set_defaults = function(value){return $locals___main___WheeledVehicle_168["computePoseChange"] = computePoseChange$204(value)}
        $B.leave_frame()
        return $locals___main___WheeledVehicle_168;
    }
    )();
    $WheeledVehicle_168.__module__ = $locals___main__.__name__
    ;$locals___main__["WheeledVehicle"] = $B.$class_constructor("WheeledVehicle", $WheeledVehicle_168,tuple.$factory([$B.builtins.object]),["$B.builtins.object"],[])
    ;$locals___main__["WheeledVehicle"].__doc__ = '\n\
    An abstract class supporting ododmetry for wheeled robots.  Your implementing\n\
    class should provide the method:\n\
    \n\
      extractOdometry(self, timestamp, leftWheel, rightWheel) --> \n\
        (timestampSeconds, leftWheelDegrees, rightWheelDegrees)      \n\
    ';
    None;
    $B.leave_frame()
}
catch(err){
    $B.leave_frame()
    throw err
}
