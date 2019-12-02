ar $B = __BRYTHON__;
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
sensors.py: SLAM sensors (currently just Laser)\n\
Copyright (C) 2014 Simon D. Levy\n\
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
    ;$locals.$line_info = "17,__main__";
    var $Laser_158 = (function(){
        var $locals___main___Laser_158 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___Laser_158, 
            $local_name = "$locals___main___Laser_158",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "18,__main__";
        '\n\
    A class representing the specifications of a scanning laser rangefinder (Lidar).\n\
    ';
        ;$locals.$line_info = "21,__main__";
        var __init__$189 = function($defaults){function __init__189(self, scan_size, scan_rate_hz, detection_angle_degrees, distance_no_detection_mm, detection_margin, offset_mm){
            var $locals___main___Laser_158___init___159 = {},
                $local_name = "__main___Laser_158___init___159",
                $locals = $locals___main___Laser_158___init___159;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___Laser_158___init___159 = $locals = $B.args("__init__", 7, {self:null, scan_size:null, scan_rate_hz:null, detection_angle_degrees:null, distance_no_detection_mm:null, detection_margin:null, offset_mm:null}, ["self", "scan_size", "scan_rate_hz", "detection_angle_degrees", "distance_no_detection_mm", "detection_margin", "offset_mm"], arguments, $defaults, null, null);
            }
            else{
                if($len == 7){
                    $locals___main___Laser_158___init___159 = $locals = {self:self, scan_size:scan_size, scan_rate_hz:scan_rate_hz, detection_angle_degrees:detection_angle_degrees, distance_no_detection_mm:distance_no_detection_mm, detection_margin:detection_margin, offset_mm:offset_mm}
                }
                else if($len > 7){$B.wrong_nb_args("__init__", $len, 7, ["self","scan_size","scan_rate_hz","detection_angle_degrees","distance_no_detection_mm","detection_margin","offset_mm"])}
                else if($len + $nb_defaults < 7){$B.wrong_nb_args("__init__", $len, 7, ["self","scan_size","scan_rate_hz","detection_angle_degrees","distance_no_detection_mm","detection_margin","offset_mm"])}
                else{
                    $locals___main___Laser_158___init___159 = $locals = {self:self, scan_size:scan_size, scan_rate_hz:scan_rate_hz, detection_angle_degrees:detection_angle_degrees, distance_no_detection_mm:distance_no_detection_mm, detection_margin:detection_margin, offset_mm:offset_mm}
                    var defparams = ["self","scan_size","scan_rate_hz","detection_angle_degrees","distance_no_detection_mm","detection_margin","offset_mm"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__189]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["Laser"]
                $B.js_this = this;
                ;$locals.$line_info = "23,__main__";
                $B.$setattr($locals["self"],"scan_size",$locals["scan_size"]);None;;
                ;$locals.$line_info = "24,__main__";
                $B.$setattr($locals["self"],"scan_rate_hz",$locals["scan_rate_hz"]);None;;
                ;$locals.$line_info = "25,__main__";
                $B.$setattr($locals["self"],"detection_angle_degrees",$locals["detection_angle_degrees"]);None;;
                ;$locals.$line_info = "26,__main__";
                $B.$setattr($locals["self"],"distance_no_detection_mm",$locals["distance_no_detection_mm"]);None;;
                ;$locals.$line_info = "27,__main__";
                $B.$setattr($locals["self"],"detection_margin",$locals["detection_margin"]);None;;
                ;$locals.$line_info = "28,__main__";
                $B.$setattr($locals["self"],"offset_mm",$locals["offset_mm"]);None;;
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__189.$is_func = true
        __init__189.$infos = {
            __name__:"__init__",
            __qualname__:"Laser.__init__",
            __defaults__ : $B.fast_tuple([$defaults.detection_margin, $defaults.offset_mm]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:7,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:21,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 7,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "scan_size", "scan_rate_hz", "detection_angle_degrees", "distance_no_detection_mm", "detection_margin", "offset_mm"]
            )}
        };None;
        return __init__189}
        $locals___main___Laser_158["__init__"] = __init__$189({detection_margin:0, offset_mm:0})
        $locals___main___Laser_158["__init__"].$set_defaults = function(value){return $locals___main___Laser_158["__init__"] = __init__$189(value)}
        ;$locals.$line_info = "30,__main__";
        var __str__$190 = function($defaults){function __str__190(self){
            var $locals___main___Laser_158___str___160 = {},
                $local_name = "__main___Laser_158___str___160",
                $locals = $locals___main___Laser_158___str___160;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___Laser_158___str___160 = $locals = $B.args("__str__", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___Laser_158___str___160 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("__str__", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("__str__", $len, 1, ["self"])}
                else{
                    $locals___main___Laser_158___str___160 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __str__190]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["Laser"]
                $B.js_this = this;
                ;$locals.$line_info = "32,__main__";
                var $res = $B.rich_op("mod", 'scan_size=%d | scan_rate=%3.3f hz | detection_angle=%3.3f deg | distance_no_detection=%7.4f mm | detection_margin=%d | offset=%4.4f m', $B.fast_tuple([$B.$getattr($locals["self"],"scan_size"),$B.$getattr($locals["self"],"scan_rate_hz"),$B.$getattr($locals["self"],"detection_angle_degrees"),$B.$getattr($locals["self"],"distance_no_detection_mm"),$B.$getattr($locals["self"],"detection_margin"),$B.$getattr($locals["self"],"offset_mm")]));$B.leave_frame("__main___Laser_158___str___160");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __str__190.$is_func = true
        __str__190.$infos = {
            __name__:"__str__",
            __qualname__:"Laser.__str__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:30,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__str__",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return __str__190}
        $locals___main___Laser_158["__str__"] = __str__$190({})
        $locals___main___Laser_158["__str__"].$set_defaults = function(value){return $locals___main___Laser_158["__str__"] = __str__$190(value)}
        ;$locals.$line_info = "35,__main__";
        var __repr__$191 = function($defaults){function __repr__191(self){
            var $locals___main___Laser_158___repr___161 = {},
                $local_name = "__main___Laser_158___repr___161",
                $locals = $locals___main___Laser_158___repr___161;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___Laser_158___repr___161 = $locals = $B.args("__repr__", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___Laser_158___repr___161 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("__repr__", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("__repr__", $len, 1, ["self"])}
                else{
                    $locals___main___Laser_158___repr___161 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __repr__191]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["Laser"]
                $B.js_this = this;
                ;$locals.$line_info = "37,__main__";
                var $res = $B.$call($B.builtins.str)($locals["self"]);$B.leave_frame("__main___Laser_158___repr___161");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __repr__191.$is_func = true
        __repr__191.$infos = {
            __name__:"__repr__",
            __qualname__:"Laser.__repr__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:35,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__repr__",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return __repr__191}
        $locals___main___Laser_158["__repr__"] = __repr__$191({})
        $locals___main___Laser_158["__repr__"].$set_defaults = function(value){return $locals___main___Laser_158["__repr__"] = __repr__$191(value)}
        $B.leave_frame()
        return $locals___main___Laser_158;
    }
    )();
    $Laser_158.__module__ = $locals___main__.__name__
    ;$locals___main__["Laser"] = $B.$class_constructor("Laser", $Laser_158,tuple.$factory([$B.builtins.object]),["$B.builtins.object"],[])
    ;$locals___main__["Laser"].__doc__ = '\n\
    A class representing the specifications of a scanning laser rangefinder (Lidar).\n\
    ';
    None;
    ;$locals.$line_info = "40,__main__";
    var $URG04LX_162 = (function(){
        var $locals___main___URG04LX_162 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___URG04LX_162, 
            $local_name = "$locals___main___URG04LX_162",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "41,__main__";
        '\n\
    A class for the Hokuyo URG-04LX\n\
    ';
        ;$locals.$line_info = "44,__main__";
        var __init__$192 = function($defaults){function __init__192(self, detectionMargin, offsetMillimeters){
            var $locals___main___URG04LX_162___init___163 = {},
                $local_name = "__main___URG04LX_162___init___163",
                $locals = $locals___main___URG04LX_162___init___163;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___URG04LX_162___init___163 = $locals = $B.args("__init__", 3, {self:null, detectionMargin:null, offsetMillimeters:null}, ["self", "detectionMargin", "offsetMillimeters"], arguments, $defaults, null, null);
            }
            else{
                if($len == 3){
                    $locals___main___URG04LX_162___init___163 = $locals = {self:self, detectionMargin:detectionMargin, offsetMillimeters:offsetMillimeters}
                }
                else if($len > 3){$B.wrong_nb_args("__init__", $len, 3, ["self","detectionMargin","offsetMillimeters"])}
                else if($len + $nb_defaults < 3){$B.wrong_nb_args("__init__", $len, 3, ["self","detectionMargin","offsetMillimeters"])}
                else{
                    $locals___main___URG04LX_162___init___163 = $locals = {self:self, detectionMargin:detectionMargin, offsetMillimeters:offsetMillimeters}
                    var defparams = ["self","detectionMargin","offsetMillimeters"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__192]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["URG04LX"]
                $B.js_this = this;
                ;$locals.$line_info = "46,__main__";
                $B.$call($B.$getattr($locals___main__["Laser"],"__init__"))($locals["self"], 682, 10, 240, 4000, $locals["detectionMargin"], $locals["offsetMillimeters"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__192.$is_func = true
        __init__192.$infos = {
            __name__:"__init__",
            __qualname__:"URG04LX.__init__",
            __defaults__ : $B.fast_tuple([$defaults.detectionMargin, $defaults.offsetMillimeters]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:3,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:44,
                co_flags:67,
                co_freevars: ["Laser"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 3,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "detectionMargin", "offsetMillimeters"]
            )}
        };None;
        return __init__192}
        $locals___main___URG04LX_162["__init__"] = __init__$192({detectionMargin:0, offsetMillimeters:0})
        $locals___main___URG04LX_162["__init__"].$set_defaults = function(value){return $locals___main___URG04LX_162["__init__"] = __init__$192(value)}
        $B.leave_frame()
        return $locals___main___URG04LX_162;
    }
    )();
    $URG04LX_162.__module__ = $locals___main__.__name__
    ;$locals___main__["URG04LX"] = $B.$class_constructor("URG04LX", $URG04LX_162,tuple.$factory([$locals___main__["Laser"]]),["$locals___main__[\"Laser\"]"],[])
    ;$locals___main__["URG04LX"].__doc__ = '\n\
    A class for the Hokuyo URG-04LX\n\
    ';
    None;
    ;$locals.$line_info = "48,__main__";
    var $XVLidar_164 = (function(){
        var $locals___main___XVLidar_164 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___XVLidar_164, 
            $local_name = "$locals___main___XVLidar_164",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "49,__main__";
        '\n\
    A class for the GetSurreal XVLidar\n\
    ';
        ;$locals.$line_info = "52,__main__";
        var __init__$193 = function($defaults){function __init__193(self, detectionMargin, offsetMillimeters){
            var $locals___main___XVLidar_164___init___165 = {},
                $local_name = "__main___XVLidar_164___init___165",
                $locals = $locals___main___XVLidar_164___init___165;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___XVLidar_164___init___165 = $locals = $B.args("__init__", 3, {self:null, detectionMargin:null, offsetMillimeters:null}, ["self", "detectionMargin", "offsetMillimeters"], arguments, $defaults, null, null);
            }
            else{
                if($len == 3){
                    $locals___main___XVLidar_164___init___165 = $locals = {self:self, detectionMargin:detectionMargin, offsetMillimeters:offsetMillimeters}
                }
                else if($len > 3){$B.wrong_nb_args("__init__", $len, 3, ["self","detectionMargin","offsetMillimeters"])}
                else if($len + $nb_defaults < 3){$B.wrong_nb_args("__init__", $len, 3, ["self","detectionMargin","offsetMillimeters"])}
                else{
                    $locals___main___XVLidar_164___init___165 = $locals = {self:self, detectionMargin:detectionMargin, offsetMillimeters:offsetMillimeters}
                    var defparams = ["self","detectionMargin","offsetMillimeters"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__193]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["XVLidar"]
                $B.js_this = this;
                ;$locals.$line_info = "54,__main__";
                $B.$call($B.$getattr($locals___main__["Laser"],"__init__"))($locals["self"], 360, (new Number(5.5)), 360, 6000, $locals["detectionMargin"], $locals["offsetMillimeters"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__193.$is_func = true
        __init__193.$infos = {
            __name__:"__init__",
            __qualname__:"XVLidar.__init__",
            __defaults__ : $B.fast_tuple([$defaults.detectionMargin, $defaults.offsetMillimeters]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:3,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:52,
                co_flags:67,
                co_freevars: ["Laser"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 3,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "detectionMargin", "offsetMillimeters"]
            )}
        };None;
        return __init__193}
        $locals___main___XVLidar_164["__init__"] = __init__$193({detectionMargin:0, offsetMillimeters:0})
        $locals___main___XVLidar_164["__init__"].$set_defaults = function(value){return $locals___main___XVLidar_164["__init__"] = __init__$193(value)}
        $B.leave_frame()
        return $locals___main___XVLidar_164;
    }
    )();
    $XVLidar_164.__module__ = $locals___main__.__name__
    ;$locals___main__["XVLidar"] = $B.$class_constructor("XVLidar", $XVLidar_164,tuple.$factory([$locals___main__["Laser"]]),["$locals___main__[\"Laser\"]"],[])
    ;$locals___main__["XVLidar"].__doc__ = '\n\
    A class for the GetSurreal XVLidar\n\
    ';
    None;
    ;$locals.$line_info = "56,__main__";
    var $RPLidarA1_166 = (function(){
        var $locals___main___RPLidarA1_166 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___RPLidarA1_166, 
            $local_name = "$locals___main___RPLidarA1_166",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "57,__main__";
        '\n\
    A class for the SLAMTEC RPLidar A1\n\
    ';
        ;$locals.$line_info = "60,__main__";
        var __init__$194 = function($defaults){function __init__194(self, detectionMargin, offsetMillimeters){
            var $locals___main___RPLidarA1_166___init___167 = {},
                $local_name = "__main___RPLidarA1_166___init___167",
                $locals = $locals___main___RPLidarA1_166___init___167;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___RPLidarA1_166___init___167 = $locals = $B.args("__init__", 3, {self:null, detectionMargin:null, offsetMillimeters:null}, ["self", "detectionMargin", "offsetMillimeters"], arguments, $defaults, null, null);
            }
            else{
                if($len == 3){
                    $locals___main___RPLidarA1_166___init___167 = $locals = {self:self, detectionMargin:detectionMargin, offsetMillimeters:offsetMillimeters}
                }
                else if($len > 3){$B.wrong_nb_args("__init__", $len, 3, ["self","detectionMargin","offsetMillimeters"])}
                else if($len + $nb_defaults < 3){$B.wrong_nb_args("__init__", $len, 3, ["self","detectionMargin","offsetMillimeters"])}
                else{
                    $locals___main___RPLidarA1_166___init___167 = $locals = {self:self, detectionMargin:detectionMargin, offsetMillimeters:offsetMillimeters}
                    var defparams = ["self","detectionMargin","offsetMillimeters"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__194]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["RPLidarA1"]
                $B.js_this = this;
                ;$locals.$line_info = "62,__main__";
                $B.$call($B.$getattr($locals___main__["Laser"],"__init__"))($locals["self"], 360, (new Number(5.5)), 360, 12000, $locals["detectionMargin"], $locals["offsetMillimeters"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__194.$is_func = true
        __init__194.$infos = {
            __name__:"__init__",
            __qualname__:"RPLidarA1.__init__",
            __defaults__ : $B.fast_tuple([$defaults.detectionMargin, $defaults.offsetMillimeters]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:3,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:60,
                co_flags:67,
                co_freevars: ["Laser"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 3,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "detectionMargin", "offsetMillimeters"]
            )}
        };None;
        return __init__194}
        $locals___main___RPLidarA1_166["__init__"] = __init__$194({detectionMargin:0, offsetMillimeters:0})
        $locals___main___RPLidarA1_166["__init__"].$set_defaults = function(value){return $locals___main___RPLidarA1_166["__init__"] = __init__$194(value)}
        $B.leave_frame()
        return $locals___main___RPLidarA1_166;
    }
    )();
    $RPLidarA1_166.__module__ = $locals___main__.__name__
    ;$locals___main__["RPLidarA1"] = $B.$class_constructor("RPLidarA1", $RPLidarA1_166,tuple.$factory([$locals___main__["Laser"]]),["$locals___main__[\"Laser\"]"],[])
    ;$locals___main__["RPLidarA1"].__doc__ = '\n\
    A class for the SLAMTEC RPLidar A1\n\
    ';
    None;
    $B.leave_frame()
}
catch(err){
    $B.leave_frame()
    throw err
}
