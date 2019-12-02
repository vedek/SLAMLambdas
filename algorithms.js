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
algorithms.py: SLAM algorithms\n\
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
    $B.$import("pybreezyslam", [],{},$locals___main__, true);None;;
    ;$locals.$line_info = "19,__main__";
    $B.$import("math", [],{},$locals___main__, true);None;;
    ;$locals.$line_info = "20,__main__";
    $B.$import("time", [],{},$locals___main__, true);None;;
    ;$locals.$line_info = "23,__main__";
    $locals___main__["_DEFAULT_MAP_QUALITY"] = 50;
    ;$locals.$line_info = "24,__main__";
    $locals___main__["_DEFAULT_HOLE_WIDTH_MM"] = 600;
    ;$locals.$line_info = "27,__main__";
    $locals___main__["_DEFAULT_SIGMA_XY_MM"] = 100;
    ;$locals.$line_info = "28,__main__";
    $locals___main__["_DEFAULT_SIGMA_THETA_DEGREES"] = 20;
    ;$locals.$line_info = "29,__main__";
    $locals___main__["_DEFAULT_MAX_SEARCH_ITER"] = 1000;
    ;$locals.$line_info = "33,__main__";
    var $CoreSLAM_135 = (function(){
        var $locals___main___CoreSLAM_135 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___CoreSLAM_135, 
            $local_name = "$locals___main___CoreSLAM_135",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "34,__main__";
        '\n\
    CoreSLAM is an abstract class that uses the classes Position, Map, Scan, and Laser\n\
    to run variants of the simple CoreSLAM (tinySLAM) algorithm described in \n\
        \n\
     @inproceedings{coreslam-2010,  \n\
       author    = {Bruno Steux and Oussama El Hamzaoui}, \n\
       title     = {CoreSLAM: a SLAM Algorithm in less than 200 lines of C code},  \n\
       booktitle = {11th International Conference on Control, Automation,   \n\
                    Robotics and Vision, ICARCV 2010, Singapore, 7-10  \n\
                    December 2010, Proceedings},  \n\
       pages     = {1975-1979},  \n\
       publisher = {IEEE},  \n\
       year      = {2010}\n\
     }\n\
    \n\
    \n\
    Implementing classes should provide the method\n\
    \n\
      _updateMapAndPointcloud(scan_mm, dxy_mm, dtheta_degrees, should_update_map)\n\
    \n\
    to update the point-cloud (particle cloud) and map (if should_update_map true)\n\
    ';
        ;$locals.$line_info = "57,__main__";
        var __init__$144 = function($defaults){function __init__144(self, laser, map_size_pixels, map_size_meters, map_quality, hole_width_mm){
            var $locals___main___CoreSLAM_135___init___136 = {},
                $local_name = "__main___CoreSLAM_135___init___136",
                $locals = $locals___main___CoreSLAM_135___init___136;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135___init___136 = $locals = $B.args("__init__", 6, {self:null, laser:null, map_size_pixels:null, map_size_meters:null, map_quality:null, hole_width_mm:null}, ["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm"], arguments, $defaults, null, null);
            }
            else{
                if($len == 6){
                    $locals___main___CoreSLAM_135___init___136 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm}
                }
                else if($len > 6){$B.wrong_nb_args("__init__", $len, 6, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"])}
                else if($len + $nb_defaults < 6){$B.wrong_nb_args("__init__", $len, 6, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"])}
                else{
                    $locals___main___CoreSLAM_135___init___136 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm}
                    var defparams = ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__144]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "59,__main__";
                '\n\
        Creates a CoreSLAM object suitable for updating with new Lidar and odometry data.\n\
        laser is a Laser object representing the specifications of your Lidar unit\n\
        map_size_pixels is the size of the square map in pixels\n\
        map_size_meters is the size of the square map in meters\n\
        quality from 0 through 255 determines integration speed of scan into map\n\
        hole_width_mm determines width of obstacles (walls)\n\
        ';
                ;$locals.$line_info = "69,__main__";
                $B.$setattr($locals["self"],"map_quality",$locals["map_quality"]);None;;
                ;$locals.$line_info = "70,__main__";
                $B.$setattr($locals["self"],"hole_width_mm",$locals["hole_width_mm"]);None;;
                ;$locals.$line_info = "73,__main__";
                $B.$setattr($locals["self"],"laser",$locals["laser"]);None;;
                ;$locals.$line_info = "76,__main__";
                $B.$setattr($locals["self"],"scan_for_distance",$B.$call($B.$getattr($locals___main__["pybreezyslam"],"Scan"))($locals["laser"], 1));None;;
                ;$locals.$line_info = "77,__main__";
                $B.$setattr($locals["self"],"scan_for_mapbuild",$B.$call($B.$getattr($locals___main__["pybreezyslam"],"Scan"))($locals["laser"], 3));None;;
                ;$locals.$line_info = "80,__main__";
                $B.$setattr($locals["self"],"map",$B.$call($B.$getattr($locals___main__["pybreezyslam"],"Map"))($locals["map_size_pixels"], $locals["map_size_meters"]));None;;
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__144.$is_func = true
        __init__144.$infos = {
            __name__:"__init__",
            __qualname__:"CoreSLAM.__init__",
            __defaults__ : $B.fast_tuple([$defaults.map_quality, $defaults.hole_width_mm]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Creates a CoreSLAM object suitable for updating with new Lidar and odometry data.\n\
        laser is a Laser object representing the specifications of your Lidar unit\n\
        map_size_pixels is the size of the square map in pixels\n\
        map_size_meters is the size of the square map in meters\n\
        quality from 0 through 255 determines integration speed of scan into map\n\
        hole_width_mm determines width of obstacles (walls)\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:6,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:57,
                co_flags:67,
                co_freevars: ["pybreezyslam"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 6,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm"]
            )}
        };None;
        return __init__144}
        $locals___main___CoreSLAM_135["__init__"] = __init__$144({map_quality:$locals___main__["_DEFAULT_MAP_QUALITY"], hole_width_mm:$locals___main__["_DEFAULT_HOLE_WIDTH_MM"]})
        $locals___main___CoreSLAM_135["__init__"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["__init__"] = __init__$144(value)}
        ;$locals.$line_info = "82,__main__";
        var update$145 = function($defaults){function update145(self, scans_mm, pose_change, scan_angles_degrees, should_update_map){
            var $locals___main___CoreSLAM_135_update_137 = {},
                $local_name = "__main___CoreSLAM_135_update_137",
                $locals = $locals___main___CoreSLAM_135_update_137;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135_update_137 = $locals = $B.args("update", 5, {self:null, scans_mm:null, pose_change:null, scan_angles_degrees:null, should_update_map:null}, ["self", "scans_mm", "pose_change", "scan_angles_degrees", "should_update_map"], arguments, $defaults, null, null);
            }
            else{
                if($len == 5){
                    $locals___main___CoreSLAM_135_update_137 = $locals = {self:self, scans_mm:scans_mm, pose_change:pose_change, scan_angles_degrees:scan_angles_degrees, should_update_map:should_update_map}
                }
                else if($len > 5){$B.wrong_nb_args("update", $len, 5, ["self","scans_mm","pose_change","scan_angles_degrees","should_update_map"])}
                else if($len + $nb_defaults < 5){$B.wrong_nb_args("update", $len, 5, ["self","scans_mm","pose_change","scan_angles_degrees","should_update_map"])}
                else{
                    $locals___main___CoreSLAM_135_update_137 = $locals = {self:self, scans_mm:scans_mm, pose_change:pose_change, scan_angles_degrees:scan_angles_degrees, should_update_map:should_update_map}
                    var defparams = ["self","scans_mm","pose_change","scan_angles_degrees","should_update_map"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, update145]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "83,__main__";
                '\n\
        Updates the scan and odometry, and calls the the implementing class\'s _updateMapAndPointcloud method with\n\
        the specified pose change.\n\
         \n\
        scan_mm is a list of Lidar scan values, whose count is specified in the scan_size \n\
        attribute of the Laser object passed to the CoreSlam constructor\n\
        pose_change is a tuple (dxy_mm, dtheta_degrees, dt_seconds) computed from odometry\n\
        scan_angles_degrees is an optional list of angles corresponding to the distances in scans_mm\n\
        should_update_map flags for whether you want to update the map\n\
        ';
                ;$locals.$line_info = "95,__main__";
                $locals___main___CoreSLAM_135_update_137["velocity_factor"] = $B.$bool($B.rich_comp("__gt__",$B.$getitem($locals["pose_change"],2),0)) ? $B.rich_op("truediv", 1, $B.$getitem($locals["pose_change"],2)) : 0;
                ;$locals.$line_info = "96,__main__";
                $locals___main___CoreSLAM_135_update_137["dxy_mm_dt"] = $B.rich_op("mul", $B.$getitem($locals["pose_change"],0), $locals["velocity_factor"]);
                ;$locals.$line_info = "97,__main__";
                $locals___main___CoreSLAM_135_update_137["dtheta_degrees_dt"] = $B.rich_op("mul", $B.$getitem($locals["pose_change"],1), $locals["velocity_factor"]);
                ;$locals.$line_info = "98,__main__";
                $locals___main___CoreSLAM_135_update_137["velocities"] = $B.fast_tuple([$locals["dxy_mm_dt"],$locals["dtheta_degrees_dt"]]);
                ;$locals.$line_info = "101,__main__";
                $B.$call($B.$getattr($locals["self"],"_scan_update"))($B.$getattr($locals["self"],"scan_for_mapbuild"), $locals["scans_mm"], $locals["velocities"], $locals["scan_angles_degrees"]);
                ;$locals.$line_info = "102,__main__";
                $B.$call($B.$getattr($locals["self"],"_scan_update"))($B.$getattr($locals["self"],"scan_for_distance"), $locals["scans_mm"], $locals["velocities"], $locals["scan_angles_degrees"]);
                ;$locals.$line_info = "105,__main__";
                $B.$call($B.$getattr($locals["self"],"_updateMapAndPointcloud"))($B.$getitem($locals["pose_change"],0), $B.$getitem($locals["pose_change"],1), $locals["should_update_map"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        update145.$is_func = true
        update145.$infos = {
            __name__:"update",
            __qualname__:"CoreSLAM.update",
            __defaults__ : $B.fast_tuple([$defaults.scan_angles_degrees, $defaults.should_update_map]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Updates the scan and odometry, and calls the the implementing class\'s _updateMapAndPointcloud method with\n\
        the specified pose change.\n\
         \n\
        scan_mm is a list of Lidar scan values, whose count is specified in the scan_size \n\
        attribute of the Laser object passed to the CoreSlam constructor\n\
        pose_change is a tuple (dxy_mm, dtheta_degrees, dt_seconds) computed from odometry\n\
        scan_angles_degrees is an optional list of angles corresponding to the distances in scans_mm\n\
        should_update_map flags for whether you want to update the map\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:5,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:82,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "update",
                co_nlocals: 5,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "scans_mm", "pose_change", "scan_angles_degrees", "should_update_map"]
            )}
        };None;
        return update145}
        $locals___main___CoreSLAM_135["update"] = update$145({scan_angles_degrees:$B.builtins.None, should_update_map:$B.builtins.True})
        $locals___main___CoreSLAM_135["update"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["update"] = update$145(value)}
        ;$locals.$line_info = "107,__main__";
        var getmap$146 = function($defaults){function getmap146(self, mapbytes){
            var $locals___main___CoreSLAM_135_getmap_138 = {},
                $local_name = "__main___CoreSLAM_135_getmap_138",
                $locals = $locals___main___CoreSLAM_135_getmap_138;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135_getmap_138 = $locals = $B.args("getmap", 2, {self:null, mapbytes:null}, ["self", "mapbytes"], arguments, $defaults, null, null);
            }
            else{
                if($len == 2){
                    $locals___main___CoreSLAM_135_getmap_138 = $locals = {self:self, mapbytes:mapbytes}
                }
                else if($len > 2){$B.wrong_nb_args("getmap", $len, 2, ["self","mapbytes"])}
                else if($len + $nb_defaults < 2){$B.wrong_nb_args("getmap", $len, 2, ["self","mapbytes"])}
                else{
                    $locals___main___CoreSLAM_135_getmap_138 = $locals = {self:self, mapbytes:mapbytes}
                    var defparams = ["self","mapbytes"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, getmap146]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "108,__main__";
                '\n\
        Fills bytearray mapbytes with current map pixels, where bytearray length is square of map size passed\n\
        to CoreSLAM.__init__().\n\
        ';
                ;$locals.$line_info = "112,__main__";
                $B.$call($B.$getattr($B.$getattr($locals["self"],"map"),"get"))($locals["mapbytes"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        getmap146.$is_func = true
        getmap146.$infos = {
            __name__:"getmap",
            __qualname__:"CoreSLAM.getmap",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Fills bytearray mapbytes with current map pixels, where bytearray length is square of map size passed\n\
        to CoreSLAM.__init__().\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:2,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:107,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "getmap",
                co_nlocals: 2,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "mapbytes"]
            )}
        };None;
        return getmap146}
        $locals___main___CoreSLAM_135["getmap"] = getmap$146({})
        $locals___main___CoreSLAM_135["getmap"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["getmap"] = getmap$146(value)}
        ;$locals.$line_info = "115,__main__";
        var setmap$147 = function($defaults){function setmap147(self, mapbytes){
            var $locals___main___CoreSLAM_135_setmap_139 = {},
                $local_name = "__main___CoreSLAM_135_setmap_139",
                $locals = $locals___main___CoreSLAM_135_setmap_139;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135_setmap_139 = $locals = $B.args("setmap", 2, {self:null, mapbytes:null}, ["self", "mapbytes"], arguments, $defaults, null, null);
            }
            else{
                if($len == 2){
                    $locals___main___CoreSLAM_135_setmap_139 = $locals = {self:self, mapbytes:mapbytes}
                }
                else if($len > 2){$B.wrong_nb_args("setmap", $len, 2, ["self","mapbytes"])}
                else if($len + $nb_defaults < 2){$B.wrong_nb_args("setmap", $len, 2, ["self","mapbytes"])}
                else{
                    $locals___main___CoreSLAM_135_setmap_139 = $locals = {self:self, mapbytes:mapbytes}
                    var defparams = ["self","mapbytes"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, setmap147]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "116,__main__";
                '\n\
        Sets current map pixels to values in bytearray, where bytearray length is square of map size passed\n\
        to CoreSLAM.__init__().\n\
        ';
                ;$locals.$line_info = "120,__main__";
                $B.$call($B.$getattr($B.$getattr($locals["self"],"map"),"set"))($locals["mapbytes"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        setmap147.$is_func = true
        setmap147.$infos = {
            __name__:"setmap",
            __qualname__:"CoreSLAM.setmap",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Sets current map pixels to values in bytearray, where bytearray length is square of map size passed\n\
        to CoreSLAM.__init__().\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:2,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:115,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "setmap",
                co_nlocals: 2,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "mapbytes"]
            )}
        };None;
        return setmap147}
        $locals___main___CoreSLAM_135["setmap"] = setmap$147({})
        $locals___main___CoreSLAM_135["setmap"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["setmap"] = setmap$147(value)}
        ;$locals.$line_info = "122,__main__";
        var __str__$148 = function($defaults){function __str__148(self){
            var $locals___main___CoreSLAM_135___str___140 = {},
                $local_name = "__main___CoreSLAM_135___str___140",
                $locals = $locals___main___CoreSLAM_135___str___140;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135___str___140 = $locals = $B.args("__str__", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___CoreSLAM_135___str___140 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("__str__", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("__str__", $len, 1, ["self"])}
                else{
                    $locals___main___CoreSLAM_135___str___140 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __str__148]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "124,__main__";
                var $res = $B.rich_op("mod", 'CoreSLAM: %s \n          map quality = %d / 255 \n          hole width = %7.0f mm', $B.fast_tuple([$B.$call($B.builtins.str)($B.$getattr($locals["self"],"map")),$B.$getattr($locals["self"],"map_quality"),$B.$getattr($locals["self"],"hole_width_mm")]));$B.leave_frame("__main___CoreSLAM_135___str___140");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __str__148.$is_func = true
        __str__148.$infos = {
            __name__:"__str__",
            __qualname__:"CoreSLAM.__str__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:122,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__str__",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return __str__148}
        $locals___main___CoreSLAM_135["__str__"] = __str__$148({})
        $locals___main___CoreSLAM_135["__str__"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["__str__"] = __str__$148(value)}
        ;$locals.$line_info = "127,__main__";
        var __repr__$149 = function($defaults){function __repr__149(self){
            var $locals___main___CoreSLAM_135___repr___141 = {},
                $local_name = "__main___CoreSLAM_135___repr___141",
                $locals = $locals___main___CoreSLAM_135___repr___141;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135___repr___141 = $locals = $B.args("__repr__", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___CoreSLAM_135___repr___141 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("__repr__", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("__repr__", $len, 1, ["self"])}
                else{
                    $locals___main___CoreSLAM_135___repr___141 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __repr__149]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "129,__main__";
                var $res = $B.$call($B.$getattr($locals["self"],"__str__"))();$B.leave_frame("__main___CoreSLAM_135___repr___141");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __repr__149.$is_func = true
        __repr__149.$infos = {
            __name__:"__repr__",
            __qualname__:"CoreSLAM.__repr__",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:127,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "__repr__",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return __repr__149}
        $locals___main___CoreSLAM_135["__repr__"] = __repr__$149({})
        $locals___main___CoreSLAM_135["__repr__"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["__repr__"] = __repr__$149(value)}
        ;$locals.$line_info = "132,__main__";
        var _scan_update$150 = function($defaults){function _scan_update150(self, scan, scans_distances_mm, velocities, scan_angles_degrees){
            var $locals___main___CoreSLAM_135__scan_update_142 = {},
                $local_name = "__main___CoreSLAM_135__scan_update_142",
                $locals = $locals___main___CoreSLAM_135__scan_update_142;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___CoreSLAM_135__scan_update_142 = $locals = $B.args("_scan_update", 5, {self:null, scan:null, scans_distances_mm:null, velocities:null, scan_angles_degrees:null}, ["self", "scan", "scans_distances_mm", "velocities", "scan_angles_degrees"], arguments, $defaults, null, null);
            }
            else{
                if($len == 5){
                    $locals___main___CoreSLAM_135__scan_update_142 = $locals = {self:self, scan:scan, scans_distances_mm:scans_distances_mm, velocities:velocities, scan_angles_degrees:scan_angles_degrees}
                }
                else if($len > 5){$B.wrong_nb_args("_scan_update", $len, 5, ["self","scan","scans_distances_mm","velocities","scan_angles_degrees"])}
                else if($len + $nb_defaults < 5){$B.wrong_nb_args("_scan_update", $len, 5, ["self","scan","scans_distances_mm","velocities","scan_angles_degrees"])}
                else{
                    $locals___main___CoreSLAM_135__scan_update_142 = $locals = {self:self, scan:scan, scans_distances_mm:scans_distances_mm, velocities:velocities, scan_angles_degrees:scan_angles_degrees}
                    var defparams = ["self","scan","scans_distances_mm","velocities","scan_angles_degrees"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _scan_update150]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["CoreSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "134,__main__";
                $B.$call($B.$getattr($locals["scan"],"update"))({$nat:"kw",kw:{scans_mm:$locals["scans_distances_mm"], hole_width_mm:$B.$getattr($locals["self"],"hole_width_mm"), velocities:$locals["velocities"], scan_angles_degrees:$locals["scan_angles_degrees"]}});
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _scan_update150.$is_func = true
        _scan_update150.$infos = {
            __name__:"_scan_update",
            __qualname__:"CoreSLAM._scan_update",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:5,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:132,
                co_flags:67,
                co_freevars: ["scans_mm","hole_width_mm"],
                co_kwonlyargcount:0,
                co_name: "_scan_update",
                co_nlocals: 5,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "scan", "scans_distances_mm", "velocities", "scan_angles_degrees"]
            )}
        };None;
        return _scan_update150}
        $locals___main___CoreSLAM_135["_scan_update"] = _scan_update$150({})
        $locals___main___CoreSLAM_135["_scan_update"].$set_defaults = function(value){return $locals___main___CoreSLAM_135["_scan_update"] = _scan_update$150(value)}
        $B.leave_frame()
        return $locals___main___CoreSLAM_135;
    }
    )();
    $CoreSLAM_135.__module__ = $locals___main__.__name__
    ;$locals___main__["CoreSLAM"] = $B.$class_constructor("CoreSLAM", $CoreSLAM_135,tuple.$factory([$B.builtins.object]),["$B.builtins.object"],[])
    ;$locals___main__["CoreSLAM"].__doc__ = '\n\
    CoreSLAM is an abstract class that uses the classes Position, Map, Scan, and Laser\n\
    to run variants of the simple CoreSLAM (tinySLAM) algorithm described in \n\
        \n\
     @inproceedings{coreslam-2010,  \n\
       author    = {Bruno Steux and Oussama El Hamzaoui}, \n\
       title     = {CoreSLAM: a SLAM Algorithm in less than 200 lines of C code},  \n\
       booktitle = {11th International Conference on Control, Automation,   \n\
                    Robotics and Vision, ICARCV 2010, Singapore, 7-10  \n\
                    December 2010, Proceedings},  \n\
       pages     = {1975-1979},  \n\
       publisher = {IEEE},  \n\
       year      = {2010}\n\
     }\n\
    \n\
    \n\
    Implementing classes should provide the method\n\
    \n\
      _updateMapAndPointcloud(scan_mm, dxy_mm, dtheta_degrees, should_update_map)\n\
    \n\
    to update the point-cloud (particle cloud) and map (if should_update_map true)\n\
    ';
    None;
    ;$locals.$line_info = "140,__main__";
    var $SinglePositionSLAM_143 = (function(){
        var $locals___main___SinglePositionSLAM_143 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___SinglePositionSLAM_143, 
            $local_name = "$locals___main___SinglePositionSLAM_143",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "141,__main__";
        '\n\
    SinglePositionSLAM is an abstract class that implements CoreSLAM using a point-cloud\n\
    with a single point (position). Implementing classes should provide the method\n\
    \n\
      _getNewPosition(self, start_position)\n\
      \n\
    to compute a new position based on searching from a starting position.\n\
    ';
        ;$locals.$line_info = "150,__main__";
        var __init__$151 = function($defaults){function __init__151(self, laser, map_size_pixels, map_size_meters, map_quality, hole_width_mm){
            var $locals___main___SinglePositionSLAM_143___init___144 = {},
                $local_name = "__main___SinglePositionSLAM_143___init___144",
                $locals = $locals___main___SinglePositionSLAM_143___init___144;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___SinglePositionSLAM_143___init___144 = $locals = $B.args("__init__", 6, {self:null, laser:null, map_size_pixels:null, map_size_meters:null, map_quality:null, hole_width_mm:null}, ["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm"], arguments, $defaults, null, null);
            }
            else{
                if($len == 6){
                    $locals___main___SinglePositionSLAM_143___init___144 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm}
                }
                else if($len > 6){$B.wrong_nb_args("__init__", $len, 6, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"])}
                else if($len + $nb_defaults < 6){$B.wrong_nb_args("__init__", $len, 6, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"])}
                else{
                    $locals___main___SinglePositionSLAM_143___init___144 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm}
                    var defparams = ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__151]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["SinglePositionSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "153,__main__";
                $B.$call($B.$getattr($locals___main__["CoreSLAM"],"__init__"))($locals["self"], $locals["laser"], $locals["map_size_pixels"], $locals["map_size_meters"], $locals["map_quality"], $locals["hole_width_mm"]);
                ;$locals.$line_info = "157,__main__";
                $locals___main___SinglePositionSLAM_143___init___144["init_coord_mm"] = (typeof $locals["map_size_meters"].valueOf() == "number" ? (typeof $locals["map_size_meters"] == "number" ? $B.mul(500,$locals["map_size_meters"]) : new Number($B.mul(500,$locals["map_size_meters"]))): $B.rich_op("mul",500,$locals["map_size_meters"]));
                ;$locals.$line_info = "158,__main__";
                $B.$setattr($locals["self"],"position",$B.$call($B.$getattr($locals___main__["pybreezyslam"],"Position"))($locals["init_coord_mm"], $locals["init_coord_mm"], 0));None;;
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__151.$is_func = true
        __init__151.$infos = {
            __name__:"__init__",
            __qualname__:"SinglePositionSLAM.__init__",
            __defaults__ : $B.fast_tuple([$defaults.map_quality, $defaults.hole_width_mm]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:6,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:150,
                co_flags:67,
                co_freevars: ["CoreSLAM","pybreezyslam"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 6,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm"]
            )}
        };None;
        return __init__151}
        $locals___main___SinglePositionSLAM_143["__init__"] = __init__$151({map_quality:$locals___main__["_DEFAULT_MAP_QUALITY"], hole_width_mm:$locals___main__["_DEFAULT_HOLE_WIDTH_MM"]})
        $locals___main___SinglePositionSLAM_143["__init__"].$set_defaults = function(value){return $locals___main___SinglePositionSLAM_143["__init__"] = __init__$151(value)}
        ;$locals.$line_info = "160,__main__";
        var _updateMapAndPointcloud$152 = function($defaults){function _updateMapAndPointcloud152(self, dxy_mm, dtheta_degrees, should_update_map){
            var $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145 = {},
                $local_name = "__main___SinglePositionSLAM_143__updateMapAndPointcloud_145",
                $locals = $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145 = $locals = $B.args("_updateMapAndPointcloud", 4, {self:null, dxy_mm:null, dtheta_degrees:null, should_update_map:null}, ["self", "dxy_mm", "dtheta_degrees", "should_update_map"], arguments, $defaults, null, null);
            }
            else{
                if($len == 4){
                    $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145 = $locals = {self:self, dxy_mm:dxy_mm, dtheta_degrees:dtheta_degrees, should_update_map:should_update_map}
                }
                else if($len > 4){$B.wrong_nb_args("_updateMapAndPointcloud", $len, 4, ["self","dxy_mm","dtheta_degrees","should_update_map"])}
                else if($len + $nb_defaults < 4){$B.wrong_nb_args("_updateMapAndPointcloud", $len, 4, ["self","dxy_mm","dtheta_degrees","should_update_map"])}
                else{
                    $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145 = $locals = {self:self, dxy_mm:dxy_mm, dtheta_degrees:dtheta_degrees, should_update_map:should_update_map}
                    var defparams = ["self","dxy_mm","dtheta_degrees","should_update_map"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _updateMapAndPointcloud152]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["SinglePositionSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "161,__main__";
                '\n\
        Updates the map and point-cloud (particle cloud). Called automatically by CoreSLAM.update()\n\
        velocities is a tuple of the form (dxy_mm, dtheta_degrees, dt_seconds).\n\
        ';
                ;$locals.$line_info = "167,__main__";
                $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145["start_pos"] = $B.$call($B.$getattr($B.$getattr($locals["self"],"position"),"copy"))();
                ;$locals.$line_info = "170,__main__";
                var $temp,$left;
                $temp = $B.rich_op("mul", $locals["dxy_mm"], $B.$call($B.$getattr($locals["self"],"_costheta"))());
                if(!hasattr($B.$getattr($locals["start_pos"],"x_mm"),"__iadd__")){
                    ;$locals.$line_info = "170,__main__";
                    $B.$setattr($locals["start_pos"],"x_mm",$B.add($B.$getattr($locals["start_pos"],"x_mm"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "170,__main__";
                    $B.$setattr($locals["start_pos"],"x_mm",$B.$getattr($B.$getattr($locals["start_pos"],"x_mm"),"__iadd__")($temp)
);None;;
                }
                ;$locals.$line_info = "171,__main__";
                var $temp,$left;
                $temp = $B.rich_op("mul", $locals["dxy_mm"], $B.$call($B.$getattr($locals["self"],"_sintheta"))());
                if(!hasattr($B.$getattr($locals["start_pos"],"y_mm"),"__iadd__")){
                    ;$locals.$line_info = "171,__main__";
                    $B.$setattr($locals["start_pos"],"y_mm",$B.add($B.$getattr($locals["start_pos"],"y_mm"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "171,__main__";
                    $B.$setattr($locals["start_pos"],"y_mm",$B.$getattr($B.$getattr($locals["start_pos"],"y_mm"),"__iadd__")($temp)
);None;;
                }
                ;$locals.$line_info = "172,__main__";
                var $temp,$left;
                $temp = $locals["dtheta_degrees"];
                if(!hasattr($B.$getattr($locals["start_pos"],"theta_degrees"),"__iadd__")){
                    ;$locals.$line_info = "172,__main__";
                    $B.$setattr($locals["start_pos"],"theta_degrees",$B.add($B.$getattr($locals["start_pos"],"theta_degrees"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "172,__main__";
                    $B.$setattr($locals["start_pos"],"theta_degrees",$B.$getattr($B.$getattr($locals["start_pos"],"theta_degrees"),"__iadd__")($temp)
);None;;
                }
                ;$locals.$line_info = "175,__main__";
                var $temp,$left;
                $temp = $B.rich_op("mul", $B.$getattr($B.$getattr($locals["self"],"laser"),"offset_mm"), $B.$call($B.$getattr($locals["self"],"_costheta"))());
                if(!hasattr($B.$getattr($locals["start_pos"],"x_mm"),"__iadd__")){
                    ;$locals.$line_info = "175,__main__";
                    $B.$setattr($locals["start_pos"],"x_mm",$B.add($B.$getattr($locals["start_pos"],"x_mm"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "175,__main__";
                    $B.$setattr($locals["start_pos"],"x_mm",$B.$getattr($B.$getattr($locals["start_pos"],"x_mm"),"__iadd__")($temp)
);None;;
                }
                ;$locals.$line_info = "176,__main__";
                var $temp,$left;
                $temp = $B.rich_op("mul", $B.$getattr($B.$getattr($locals["self"],"laser"),"offset_mm"), $B.$call($B.$getattr($locals["self"],"_sintheta"))());
                if(!hasattr($B.$getattr($locals["start_pos"],"y_mm"),"__iadd__")){
                    ;$locals.$line_info = "176,__main__";
                    $B.$setattr($locals["start_pos"],"y_mm",$B.add($B.$getattr($locals["start_pos"],"y_mm"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "176,__main__";
                    $B.$setattr($locals["start_pos"],"y_mm",$B.$getattr($B.$getattr($locals["start_pos"],"y_mm"),"__iadd__")($temp)
);None;;
                }
                ;$locals.$line_info = "179,__main__";
                $locals___main___SinglePositionSLAM_143__updateMapAndPointcloud_145["new_position"] = $B.$call($B.$getattr($locals["self"],"_getNewPosition"))($locals["start_pos"]);
                ;$locals.$line_info = "182,__main__";
                $B.$setattr($locals["self"],"position",$B.$call($B.$getattr($locals["new_position"],"copy"))());None;;
                ;$locals.$line_info = "183,__main__";
                var $temp,$left;
                $temp = $B.rich_op("mul", $B.$getattr($B.$getattr($locals["self"],"laser"),"offset_mm"), $B.$call($B.$getattr($locals["self"],"_costheta"))());
                if(!hasattr($B.$getattr($B.$getattr($locals["self"],"position"),"x_mm"),"__isub__")){
                    ;$locals.$line_info = "183,__main__";
                    $B.$setattr($B.$getattr($locals["self"],"position"),"x_mm",$B.rich_op("sub", $B.$getattr($B.$getattr($locals["self"],"position"),"x_mm"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "183,__main__";
                    $B.$setattr($B.$getattr($locals["self"],"position"),"x_mm",$B.$getattr($B.$getattr($B.$getattr($locals["self"],"position"),"x_mm"),"__isub__")($temp)
);None;;
                }
                ;$locals.$line_info = "184,__main__";
                var $temp,$left;
                $temp = $B.rich_op("mul", $B.$getattr($B.$getattr($locals["self"],"laser"),"offset_mm"), $B.$call($B.$getattr($locals["self"],"_sintheta"))());
                if(!hasattr($B.$getattr($B.$getattr($locals["self"],"position"),"y_mm"),"__isub__")){
                    ;$locals.$line_info = "184,__main__";
                    $B.$setattr($B.$getattr($locals["self"],"position"),"y_mm",$B.rich_op("sub", $B.$getattr($B.$getattr($locals["self"],"position"),"y_mm"), $temp));None;;
                }
                else{
                    ;$locals.$line_info = "184,__main__";
                    $B.$setattr($B.$getattr($locals["self"],"position"),"y_mm",$B.$getattr($B.$getattr($B.$getattr($locals["self"],"position"),"y_mm"),"__isub__")($temp)
);None;;
                }
                ;$locals.$line_info = "187,__main__";
                if($B.$bool($locals["should_update_map"])){
                    ;$locals.$line_info = "188,__main__";
                    $B.$call($B.$getattr($B.$getattr($locals["self"],"map"),"update"))($B.$getattr($locals["self"],"scan_for_mapbuild"), $locals["new_position"], $B.$getattr($locals["self"],"map_quality"), $B.$getattr($locals["self"],"hole_width_mm"));
                }
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _updateMapAndPointcloud152.$is_func = true
        _updateMapAndPointcloud152.$infos = {
            __name__:"_updateMapAndPointcloud",
            __qualname__:"SinglePositionSLAM._updateMapAndPointcloud",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Updates the map and point-cloud (particle cloud). Called automatically by CoreSLAM.update()\n\
        velocities is a tuple of the form (dxy_mm, dtheta_degrees, dt_seconds).\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:4,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:160,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "_updateMapAndPointcloud",
                co_nlocals: 4,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "dxy_mm", "dtheta_degrees", "should_update_map"]
            )}
        };None;
        return _updateMapAndPointcloud152}
        $locals___main___SinglePositionSLAM_143["_updateMapAndPointcloud"] = _updateMapAndPointcloud$152({})
        $locals___main___SinglePositionSLAM_143["_updateMapAndPointcloud"].$set_defaults = function(value){return $locals___main___SinglePositionSLAM_143["_updateMapAndPointcloud"] = _updateMapAndPointcloud$152(value)}
        ;$locals.$line_info = "190,__main__";
        var getpos$153 = function($defaults){function getpos153(self){
            var $locals___main___SinglePositionSLAM_143_getpos_146 = {},
                $local_name = "__main___SinglePositionSLAM_143_getpos_146",
                $locals = $locals___main___SinglePositionSLAM_143_getpos_146;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___SinglePositionSLAM_143_getpos_146 = $locals = $B.args("getpos", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___SinglePositionSLAM_143_getpos_146 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("getpos", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("getpos", $len, 1, ["self"])}
                else{
                    $locals___main___SinglePositionSLAM_143_getpos_146 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, getpos153]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["SinglePositionSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "191,__main__";
                '\n\
        Returns current position as a tuple (x_mm, y_mm, theta_degrees)\n\
        ';
                ;$locals.$line_info = "194,__main__";
                var $res = $B.fast_tuple([$B.$getattr($B.$getattr($locals["self"],"position"),"x_mm"),$B.$getattr($B.$getattr($locals["self"],"position"),"y_mm"),$B.$getattr($B.$getattr($locals["self"],"position"),"theta_degrees")]);$B.leave_frame("__main___SinglePositionSLAM_143_getpos_146");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        getpos153.$is_func = true
        getpos153.$infos = {
            __name__:"getpos",
            __qualname__:"SinglePositionSLAM.getpos",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Returns current position as a tuple (x_mm, y_mm, theta_degrees)\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:190,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "getpos",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return getpos153}
        $locals___main___SinglePositionSLAM_143["getpos"] = getpos$153({})
        $locals___main___SinglePositionSLAM_143["getpos"].$set_defaults = function(value){return $locals___main___SinglePositionSLAM_143["getpos"] = getpos$153(value)}
        ;$locals.$line_info = "197,__main__";
        var _costheta$154 = function($defaults){function _costheta154(self){
            var $locals___main___SinglePositionSLAM_143__costheta_147 = {},
                $local_name = "__main___SinglePositionSLAM_143__costheta_147",
                $locals = $locals___main___SinglePositionSLAM_143__costheta_147;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___SinglePositionSLAM_143__costheta_147 = $locals = $B.args("_costheta", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___SinglePositionSLAM_143__costheta_147 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("_costheta", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("_costheta", $len, 1, ["self"])}
                else{
                    $locals___main___SinglePositionSLAM_143__costheta_147 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _costheta154]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["SinglePositionSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "199,__main__";
                var $res = $B.$call($B.$getattr($locals___main__["math"],"cos"))($B.$call($B.$getattr($locals["self"],"_thetaradians"))());$B.leave_frame("__main___SinglePositionSLAM_143__costheta_147");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _costheta154.$is_func = true
        _costheta154.$infos = {
            __name__:"_costheta",
            __qualname__:"SinglePositionSLAM._costheta",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:197,
                co_flags:67,
                co_freevars: ["math"],
                co_kwonlyargcount:0,
                co_name: "_costheta",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return _costheta154}
        $locals___main___SinglePositionSLAM_143["_costheta"] = _costheta$154({})
        $locals___main___SinglePositionSLAM_143["_costheta"].$set_defaults = function(value){return $locals___main___SinglePositionSLAM_143["_costheta"] = _costheta$154(value)}
        ;$locals.$line_info = "201,__main__";
        var _sintheta$155 = function($defaults){function _sintheta155(self){
            var $locals___main___SinglePositionSLAM_143__sintheta_148 = {},
                $local_name = "__main___SinglePositionSLAM_143__sintheta_148",
                $locals = $locals___main___SinglePositionSLAM_143__sintheta_148;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___SinglePositionSLAM_143__sintheta_148 = $locals = $B.args("_sintheta", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___SinglePositionSLAM_143__sintheta_148 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("_sintheta", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("_sintheta", $len, 1, ["self"])}
                else{
                    $locals___main___SinglePositionSLAM_143__sintheta_148 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _sintheta155]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["SinglePositionSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "203,__main__";
                var $res = $B.$call($B.$getattr($locals___main__["math"],"sin"))($B.$call($B.$getattr($locals["self"],"_thetaradians"))());$B.leave_frame("__main___SinglePositionSLAM_143__sintheta_148");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _sintheta155.$is_func = true
        _sintheta155.$infos = {
            __name__:"_sintheta",
            __qualname__:"SinglePositionSLAM._sintheta",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:201,
                co_flags:67,
                co_freevars: ["math"],
                co_kwonlyargcount:0,
                co_name: "_sintheta",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return _sintheta155}
        $locals___main___SinglePositionSLAM_143["_sintheta"] = _sintheta$155({})
        $locals___main___SinglePositionSLAM_143["_sintheta"].$set_defaults = function(value){return $locals___main___SinglePositionSLAM_143["_sintheta"] = _sintheta$155(value)}
        ;$locals.$line_info = "205,__main__";
        var _thetaradians$156 = function($defaults){function _thetaradians156(self){
            var $locals___main___SinglePositionSLAM_143__thetaradians_149 = {},
                $local_name = "__main___SinglePositionSLAM_143__thetaradians_149",
                $locals = $locals___main___SinglePositionSLAM_143__thetaradians_149;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___SinglePositionSLAM_143__thetaradians_149 = $locals = $B.args("_thetaradians", 1, {self:null}, ["self"], arguments, $defaults, null, null);
            }
            else{
                if($len == 1){
                    $locals___main___SinglePositionSLAM_143__thetaradians_149 = $locals = {self:self}
                }
                else if($len > 1){$B.wrong_nb_args("_thetaradians", $len, 1, ["self"])}
                else if($len + $nb_defaults < 1){$B.wrong_nb_args("_thetaradians", $len, 1, ["self"])}
                else{
                    $locals___main___SinglePositionSLAM_143__thetaradians_149 = $locals = {self:self}
                    var defparams = ["self"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _thetaradians156]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["SinglePositionSLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "207,__main__";
                var $res = $B.$call($B.$getattr($locals___main__["math"],"radians"))($B.$getattr($B.$getattr($locals["self"],"position"),"theta_degrees"));$B.leave_frame("__main___SinglePositionSLAM_143__thetaradians_149");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _thetaradians156.$is_func = true
        _thetaradians156.$infos = {
            __name__:"_thetaradians",
            __qualname__:"SinglePositionSLAM._thetaradians",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:1,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:205,
                co_flags:67,
                co_freevars: ["math"],
                co_kwonlyargcount:0,
                co_name: "_thetaradians",
                co_nlocals: 1,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self"]
            )}
        };None;
        return _thetaradians156}
        $locals___main___SinglePositionSLAM_143["_thetaradians"] = _thetaradians$156({})
        $locals___main___SinglePositionSLAM_143["_thetaradians"].$set_defaults = function(value){return $locals___main___SinglePositionSLAM_143["_thetaradians"] = _thetaradians$156(value)}
        $B.leave_frame()
        return $locals___main___SinglePositionSLAM_143;
    }
    )();
    $SinglePositionSLAM_143.__module__ = $locals___main__.__name__
    ;$locals___main__["SinglePositionSLAM"] = $B.$class_constructor("SinglePositionSLAM", $SinglePositionSLAM_143,tuple.$factory([$locals___main__["CoreSLAM"]]),["$locals___main__[\"CoreSLAM\"]"],[])
    ;$locals___main__["SinglePositionSLAM"].__doc__ = '\n\
    SinglePositionSLAM is an abstract class that implements CoreSLAM using a point-cloud\n\
    with a single point (position). Implementing classes should provide the method\n\
    \n\
      _getNewPosition(self, start_position)\n\
      \n\
    to compute a new position based on searching from a starting position.\n\
    ';
    None;
    ;$locals.$line_info = "211,__main__";
    var $RMHC_SLAM_150 = (function(){
        var $locals___main___RMHC_SLAM_150 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___RMHC_SLAM_150, 
            $local_name = "$locals___main___RMHC_SLAM_150",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "212,__main__";
        '\n\
    RMHC_SLAM implements the _getNewPosition() method of SinglePositionSLAM using Random-Mutation Hill-Climbing\n\
    search.  Uses its own internal pseudorandom-number generator for efficiency.\n\
    ';
        ;$locals.$line_info = "217,__main__";
        var __init__$157 = function($defaults){function __init__157(self, laser, map_size_pixels, map_size_meters, map_quality, hole_width_mm, random_seed, sigma_xy_mm, sigma_theta_degrees, max_search_iter){
            var $locals___main___RMHC_SLAM_150___init___151 = {},
                $local_name = "__main___RMHC_SLAM_150___init___151",
                $locals = $locals___main___RMHC_SLAM_150___init___151;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___RMHC_SLAM_150___init___151 = $locals = $B.args("__init__", 10, {self:null, laser:null, map_size_pixels:null, map_size_meters:null, map_quality:null, hole_width_mm:null, random_seed:null, sigma_xy_mm:null, sigma_theta_degrees:null, max_search_iter:null}, ["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm", "random_seed", "sigma_xy_mm", "sigma_theta_degrees", "max_search_iter"], arguments, $defaults, null, null);
            }
            else{
                if($len == 10){
                    $locals___main___RMHC_SLAM_150___init___151 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm, random_seed:random_seed, sigma_xy_mm:sigma_xy_mm, sigma_theta_degrees:sigma_theta_degrees, max_search_iter:max_search_iter}
                }
                else if($len > 10){$B.wrong_nb_args("__init__", $len, 10, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm","random_seed","sigma_xy_mm","sigma_theta_degrees","max_search_iter"])}
                else if($len + $nb_defaults < 10){$B.wrong_nb_args("__init__", $len, 10, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm","random_seed","sigma_xy_mm","sigma_theta_degrees","max_search_iter"])}
                else{
                    $locals___main___RMHC_SLAM_150___init___151 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm, random_seed:random_seed, sigma_xy_mm:sigma_xy_mm, sigma_theta_degrees:sigma_theta_degrees, max_search_iter:max_search_iter}
                    var defparams = ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm","random_seed","sigma_xy_mm","sigma_theta_degrees","max_search_iter"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__157]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["RMHC_SLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "221,__main__";
                '\n\
        Creates a RMHCSlam object suitable for updating with new Lidar and odometry data.\n\
        laser is a Laser object representing the specifications of your Lidar unit\n\
        map_size_pixels is the size of the square map in pixels\n\
        map_size_meters is the size of the square map in meters\n\
        quality from 0 through 255 determines integration speed of scan into map\n\
        hole_width_mm determines width of obstacles (walls)\n\
        random_seed supports reproducible results; defaults to system time if unspecified\n\
        sigma_xy_mm specifies the standard deviation in millimeters of the normal distribution of \n\
           the (X,Y) component of position for RMHC search\n\
        sigma_theta_degrees specifies the standard deviation in degrees of the normal distribution of \n\
           the rotational component of position for RMHC search\n\
        max_search_iter specifies the maximum number of iterations for RMHC search\n\
        ';
                ;$locals.$line_info = "236,__main__";
                $B.$call($B.$getattr($locals___main__["SinglePositionSLAM"],"__init__"))($locals["self"], $locals["laser"], $locals["map_size_pixels"], $locals["map_size_meters"], $locals["map_quality"], $locals["hole_width_mm"]);
                ;$locals.$line_info = "239,__main__";
                if($B.$bool(!$B.$bool($locals["random_seed"]))){
                    ;$locals.$line_info = "240,__main__";
                    $locals___main___RMHC_SLAM_150___init___151["random_seed"] = $B.rich_op("and", $B.$call($B.builtins.int)($B.$call($B.$getattr($locals___main__["time"],"time"))()), 65535);
                }
                ;$locals.$line_info = "242,__main__";
                $B.$setattr($locals["self"],"randomizer",$B.$call($B.$getattr($locals___main__["pybreezyslam"],"Randomizer"))($locals["random_seed"]));None;;
                ;$locals.$line_info = "244,__main__";
                $B.$setattr($locals["self"],"sigma_xy_mm",$locals["sigma_xy_mm"]);None;;
                ;$locals.$line_info = "245,__main__";
                $B.$setattr($locals["self"],"sigma_theta_degrees",$locals["sigma_theta_degrees"]);None;;
                ;$locals.$line_info = "246,__main__";
                $B.$setattr($locals["self"],"max_search_iter",$locals["max_search_iter"]);None;;
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__157.$is_func = true
        __init__157.$infos = {
            __name__:"__init__",
            __qualname__:"RMHC_SLAM.__init__",
            __defaults__ : $B.fast_tuple([$defaults.map_quality, $defaults.hole_width_mm, $defaults.random_seed, $defaults.sigma_xy_mm, $defaults.sigma_theta_degrees, $defaults.max_search_iter]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Creates a RMHCSlam object suitable for updating with new Lidar and odometry data.\n\
        laser is a Laser object representing the specifications of your Lidar unit\n\
        map_size_pixels is the size of the square map in pixels\n\
        map_size_meters is the size of the square map in meters\n\
        quality from 0 through 255 determines integration speed of scan into map\n\
        hole_width_mm determines width of obstacles (walls)\n\
        random_seed supports reproducible results; defaults to system time if unspecified\n\
        sigma_xy_mm specifies the standard deviation in millimeters of the normal distribution of \n\
           the (X,Y) component of position for RMHC search\n\
        sigma_theta_degrees specifies the standard deviation in degrees of the normal distribution of \n\
           the rotational component of position for RMHC search\n\
        max_search_iter specifies the maximum number of iterations for RMHC search\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:10,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:217,
                co_flags:67,
                co_freevars: ["SinglePositionSLAM","time","pybreezyslam"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 10,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm", "random_seed", "sigma_xy_mm", "sigma_theta_degrees", "max_search_iter"]
            )}
        };None;
        return __init__157}
        $locals___main___RMHC_SLAM_150["__init__"] = __init__$157({map_quality:$locals___main__["_DEFAULT_MAP_QUALITY"], hole_width_mm:$locals___main__["_DEFAULT_HOLE_WIDTH_MM"], random_seed:$B.builtins.None, sigma_xy_mm:$locals___main__["_DEFAULT_SIGMA_XY_MM"], sigma_theta_degrees:$locals___main__["_DEFAULT_SIGMA_THETA_DEGREES"], max_search_iter:$locals___main__["_DEFAULT_MAX_SEARCH_ITER"]})
        $locals___main___RMHC_SLAM_150["__init__"].$set_defaults = function(value){return $locals___main___RMHC_SLAM_150["__init__"] = __init__$157(value)}
        ;$locals.$line_info = "248,__main__";
        var update$158 = function($defaults){function update158(self, scans_mm, pose_change, scan_angles_degrees, should_update_map){
            var $locals___main___RMHC_SLAM_150_update_152 = {},
                $local_name = "__main___RMHC_SLAM_150_update_152",
                $locals = $locals___main___RMHC_SLAM_150_update_152;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___RMHC_SLAM_150_update_152 = $locals = $B.args("update", 5, {self:null, scans_mm:null, pose_change:null, scan_angles_degrees:null, should_update_map:null}, ["self", "scans_mm", "pose_change", "scan_angles_degrees", "should_update_map"], arguments, $defaults, null, null);
            }
            else{
                if($len == 5){
                    $locals___main___RMHC_SLAM_150_update_152 = $locals = {self:self, scans_mm:scans_mm, pose_change:pose_change, scan_angles_degrees:scan_angles_degrees, should_update_map:should_update_map}
                }
                else if($len > 5){$B.wrong_nb_args("update", $len, 5, ["self","scans_mm","pose_change","scan_angles_degrees","should_update_map"])}
                else if($len + $nb_defaults < 5){$B.wrong_nb_args("update", $len, 5, ["self","scans_mm","pose_change","scan_angles_degrees","should_update_map"])}
                else{
                    $locals___main___RMHC_SLAM_150_update_152 = $locals = {self:self, scans_mm:scans_mm, pose_change:pose_change, scan_angles_degrees:scan_angles_degrees, should_update_map:should_update_map}
                    var defparams = ["self","scans_mm","pose_change","scan_angles_degrees","should_update_map"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, update158]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["RMHC_SLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "250,__main__";
                if($B.$bool(!$B.$bool($locals["pose_change"]))){
                    ;$locals.$line_info = "252,__main__";
                    $locals___main___RMHC_SLAM_150_update_152["pose_change"] = $B.fast_tuple([0,0,0]);
                }
                ;$locals.$line_info = "254,__main__";
                $B.$call($B.$getattr($locals___main__["CoreSLAM"],"update"))($locals["self"], $locals["scans_mm"], $locals["pose_change"], $locals["scan_angles_degrees"], $locals["should_update_map"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        update158.$is_func = true
        update158.$infos = {
            __name__:"update",
            __qualname__:"RMHC_SLAM.update",
            __defaults__ : $B.fast_tuple([$defaults.pose_change, $defaults.scan_angles_degrees, $defaults.should_update_map]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:5,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:248,
                co_flags:67,
                co_freevars: ["CoreSLAM"],
                co_kwonlyargcount:0,
                co_name: "update",
                co_nlocals: 5,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "scans_mm", "pose_change", "scan_angles_degrees", "should_update_map"]
            )}
        };None;
        return update158}
        $locals___main___RMHC_SLAM_150["update"] = update$158({pose_change:$B.builtins.None, scan_angles_degrees:$B.builtins.None, should_update_map:$B.builtins.True})
        $locals___main___RMHC_SLAM_150["update"].$set_defaults = function(value){return $locals___main___RMHC_SLAM_150["update"] = update$158(value)}
        ;$locals.$line_info = "256,__main__";
        var _getNewPosition$159 = function($defaults){function _getNewPosition159(self, start_position){
            var $locals___main___RMHC_SLAM_150__getNewPosition_153 = {},
                $local_name = "__main___RMHC_SLAM_150__getNewPosition_153",
                $locals = $locals___main___RMHC_SLAM_150__getNewPosition_153;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___RMHC_SLAM_150__getNewPosition_153 = $locals = $B.args("_getNewPosition", 2, {self:null, start_position:null}, ["self", "start_position"], arguments, $defaults, null, null);
            }
            else{
                if($len == 2){
                    $locals___main___RMHC_SLAM_150__getNewPosition_153 = $locals = {self:self, start_position:start_position}
                }
                else if($len > 2){$B.wrong_nb_args("_getNewPosition", $len, 2, ["self","start_position"])}
                else if($len + $nb_defaults < 2){$B.wrong_nb_args("_getNewPosition", $len, 2, ["self","start_position"])}
                else{
                    $locals___main___RMHC_SLAM_150__getNewPosition_153 = $locals = {self:self, start_position:start_position}
                    var defparams = ["self","start_position"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _getNewPosition159]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["RMHC_SLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "257,__main__";
                '\n\
        Implements the _getNewPosition() method of SinglePositionSLAM. Uses Random-Mutation Hill-Climbing\n\
        search to look for a better position based on a starting position.\n\
        ';
                ;$locals.$line_info = "263,__main__";
                var $res = $B.$call($B.$getattr($locals___main__["pybreezyslam"],"rmhcPositionSearch"))($locals["start_position"], $B.$getattr($locals["self"],"map"), $B.$getattr($locals["self"],"scan_for_distance"), $B.$getattr($locals["self"],"laser"), $B.$getattr($locals["self"],"sigma_xy_mm"), $B.$getattr($locals["self"],"sigma_theta_degrees"), $B.$getattr($locals["self"],"max_search_iter"), $B.$getattr($locals["self"],"randomizer"));$B.leave_frame("__main___RMHC_SLAM_150__getNewPosition_153");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _getNewPosition159.$is_func = true
        _getNewPosition159.$infos = {
            __name__:"_getNewPosition",
            __qualname__:"RMHC_SLAM._getNewPosition",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Implements the _getNewPosition() method of SinglePositionSLAM. Uses Random-Mutation Hill-Climbing\n\
        search to look for a better position based on a starting position.\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:2,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:256,
                co_flags:67,
                co_freevars: ["pybreezyslam"],
                co_kwonlyargcount:0,
                co_name: "_getNewPosition",
                co_nlocals: 2,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "start_position"]
            )}
        };None;
        return _getNewPosition159}
        $locals___main___RMHC_SLAM_150["_getNewPosition"] = _getNewPosition$159({})
        $locals___main___RMHC_SLAM_150["_getNewPosition"].$set_defaults = function(value){return $locals___main___RMHC_SLAM_150["_getNewPosition"] = _getNewPosition$159(value)}
        ;$locals.$line_info = "273,__main__";
        var _random_normal$160 = function($defaults){function _random_normal160(self, mu, sigma){
            var $locals___main___RMHC_SLAM_150__random_normal_154 = {},
                $local_name = "__main___RMHC_SLAM_150__random_normal_154",
                $locals = $locals___main___RMHC_SLAM_150__random_normal_154;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___RMHC_SLAM_150__random_normal_154 = $locals = $B.args("_random_normal", 3, {self:null, mu:null, sigma:null}, ["self", "mu", "sigma"], arguments, $defaults, null, null);
            }
            else{
                if($len == 3){
                    $locals___main___RMHC_SLAM_150__random_normal_154 = $locals = {self:self, mu:mu, sigma:sigma}
                }
                else if($len > 3){$B.wrong_nb_args("_random_normal", $len, 3, ["self","mu","sigma"])}
                else if($len + $nb_defaults < 3){$B.wrong_nb_args("_random_normal", $len, 3, ["self","mu","sigma"])}
                else{
                    $locals___main___RMHC_SLAM_150__random_normal_154 = $locals = {self:self, mu:mu, sigma:sigma}
                    var defparams = ["self","mu","sigma"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _random_normal160]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["RMHC_SLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "275,__main__";
                var $res = $B.add($locals["mu"], $B.rich_op("mul", $B.$call($B.$getattr($B.$getattr($locals["self"],"randomizer"),"rnor"))(), $locals["sigma"]));$B.leave_frame("__main___RMHC_SLAM_150__random_normal_154");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _random_normal160.$is_func = true
        _random_normal160.$infos = {
            __name__:"_random_normal",
            __qualname__:"RMHC_SLAM._random_normal",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: None,
            __module__ : "__main__",
            __code__:{
                co_argcount:3,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:273,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "_random_normal",
                co_nlocals: 3,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "mu", "sigma"]
            )}
        };None;
        return _random_normal160}
        $locals___main___RMHC_SLAM_150["_random_normal"] = _random_normal$160({})
        $locals___main___RMHC_SLAM_150["_random_normal"].$set_defaults = function(value){return $locals___main___RMHC_SLAM_150["_random_normal"] = _random_normal$160(value)}
        $B.leave_frame()
        return $locals___main___RMHC_SLAM_150;
    }
    )();
    $RMHC_SLAM_150.__module__ = $locals___main__.__name__
    ;$locals___main__["RMHC_SLAM"] = $B.$class_constructor("RMHC_SLAM", $RMHC_SLAM_150,tuple.$factory([$locals___main__["SinglePositionSLAM"]]),["$locals___main__[\"SinglePositionSLAM\"]"],[])
    ;$locals___main__["RMHC_SLAM"].__doc__ = '\n\
    RMHC_SLAM implements the _getNewPosition() method of SinglePositionSLAM using Random-Mutation Hill-Climbing\n\
    search.  Uses its own internal pseudorandom-number generator for efficiency.\n\
    ';
    None;
    ;$locals.$line_info = "279,__main__";
    var $Deterministic_SLAM_155 = (function(){
        var $locals___main___Deterministic_SLAM_155 = {__annotations__: _b_.dict.$factory()}, 
            $locals = $locals___main___Deterministic_SLAM_155, 
            $local_name = "$locals___main___Deterministic_SLAM_155",
            $top_frame = [$local_name, $locals,"__main__", $locals___main__]
            $B.frames_stack.push($top_frame)
        ;$locals.$line_info = "280,__main__";
        '\n\
    Deterministic_SLAM implements the _getNewPosition() method of SinglePositionSLAM by simply\n\
    copying the search-start position.\n\
    ';
        ;$locals.$line_info = "285,__main__";
        var __init__$161 = function($defaults){function __init__161(self, laser, map_size_pixels, map_size_meters, map_quality, hole_width_mm){
            var $locals___main___Deterministic_SLAM_155___init___156 = {},
                $local_name = "__main___Deterministic_SLAM_155___init___156",
                $locals = $locals___main___Deterministic_SLAM_155___init___156;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___Deterministic_SLAM_155___init___156 = $locals = $B.args("__init__", 6, {self:null, laser:null, map_size_pixels:null, map_size_meters:null, map_quality:null, hole_width_mm:null}, ["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm"], arguments, $defaults, null, null);
            }
            else{
                if($len == 6){
                    $locals___main___Deterministic_SLAM_155___init___156 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm}
                }
                else if($len > 6){$B.wrong_nb_args("__init__", $len, 6, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"])}
                else if($len + $nb_defaults < 6){$B.wrong_nb_args("__init__", $len, 6, ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"])}
                else{
                    $locals___main___Deterministic_SLAM_155___init___156 = $locals = {self:self, laser:laser, map_size_pixels:map_size_pixels, map_size_meters:map_size_meters, map_quality:map_quality, hole_width_mm:hole_width_mm}
                    var defparams = ["self","laser","map_size_pixels","map_size_meters","map_quality","hole_width_mm"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, __init__161]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["Deterministic_SLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "287,__main__";
                '\n\
        Creates a Deterministic_Slam object suitable for updating with new Lidar and odometry data.\n\
        laser is a Laser object representing the specifications of your Lidar unit\n\
        map_size_pixels is the size of the square map in pixels\n\
        map_size_meters is the size of the square map in meters\n\
        quality from 0 through 255 determines integration speed of scan into map\n\
        hole_width_mm determines width of obstacles (walls)\n\
        ';
                ;$locals.$line_info = "296,__main__";
                $B.$call($B.$getattr($locals___main__["SinglePositionSLAM"],"__init__"))($locals["self"], $locals["laser"], $locals["map_size_pixels"], $locals["map_size_meters"], $locals["map_quality"], $locals["hole_width_mm"]);
                $B.leave_frame();return None
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        __init__161.$is_func = true
        __init__161.$infos = {
            __name__:"__init__",
            __qualname__:"Deterministic_SLAM.__init__",
            __defaults__ : $B.fast_tuple([$defaults.map_quality, $defaults.hole_width_mm]),
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Creates a Deterministic_Slam object suitable for updating with new Lidar and odometry data.\n\
        laser is a Laser object representing the specifications of your Lidar unit\n\
        map_size_pixels is the size of the square map in pixels\n\
        map_size_meters is the size of the square map in meters\n\
        quality from 0 through 255 determines integration speed of scan into map\n\
        hole_width_mm determines width of obstacles (walls)\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:6,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:285,
                co_flags:67,
                co_freevars: ["SinglePositionSLAM"],
                co_kwonlyargcount:0,
                co_name: "__init__",
                co_nlocals: 6,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "laser", "map_size_pixels", "map_size_meters", "map_quality", "hole_width_mm"]
            )}
        };None;
        return __init__161}
        $locals___main___Deterministic_SLAM_155["__init__"] = __init__$161({map_quality:$locals___main__["_DEFAULT_MAP_QUALITY"], hole_width_mm:$locals___main__["_DEFAULT_HOLE_WIDTH_MM"]})
        $locals___main___Deterministic_SLAM_155["__init__"].$set_defaults = function(value){return $locals___main___Deterministic_SLAM_155["__init__"] = __init__$161(value)}
        ;$locals.$line_info = "299,__main__";
        var _getNewPosition$162 = function($defaults){function _getNewPosition162(self, start_position){
            var $locals___main___Deterministic_SLAM_155__getNewPosition_157 = {},
                $local_name = "__main___Deterministic_SLAM_155__getNewPosition_157",
                $locals = $locals___main___Deterministic_SLAM_155__getNewPosition_157;
            var $nb_defaults = Object.keys($defaults).length,
                $parent = $locals.$parent
            var $len = arguments.length;
            if($len > 0 && arguments[$len - 1].$nat !== undefined){
                $locals___main___Deterministic_SLAM_155__getNewPosition_157 = $locals = $B.args("_getNewPosition", 2, {self:null, start_position:null}, ["self", "start_position"], arguments, $defaults, null, null);
            }
            else{
                if($len == 2){
                    $locals___main___Deterministic_SLAM_155__getNewPosition_157 = $locals = {self:self, start_position:start_position}
                }
                else if($len > 2){$B.wrong_nb_args("_getNewPosition", $len, 2, ["self","start_position"])}
                else if($len + $nb_defaults < 2){$B.wrong_nb_args("_getNewPosition", $len, 2, ["self","start_position"])}
                else{
                    $locals___main___Deterministic_SLAM_155__getNewPosition_157 = $locals = {self:self, start_position:start_position}
                    var defparams = ["self","start_position"]
                    for(var i=$len; i < defparams.length;i++){$locals[defparams[i]] = $defaults[defparams[i]]}
                }
            }
            var $top_frame = [$local_name, $locals,"__main__", $locals___main__, _getNewPosition162]
            $B.frames_stack.push($top_frame)
            var $stack_length = $B.frames_stack.length;
            try{
                $locals.__annotations__ = _b_.dict.$factory()
                $top_frame[1] = $locals
                $locals.$parent = $parent
                $locals.__class__ = $locals___main__["Deterministic_SLAM"]
                $B.js_this = this;
                ;$locals.$line_info = "300,__main__";
                '\n\
        Implements the _getNewPosition() method of SinglePositionSLAM. Returns a copy of the starting position.\n\
        ';
                ;$locals.$line_info = "304,__main__";
                var $res = $B.$call($B.$getattr($locals["start_position"],"copy"))();$B.leave_frame("__main___Deterministic_SLAM_155__getNewPosition_157");return $res;
            }
            catch(err){
                $B.leave_frame();throw err
            }
        }
        _getNewPosition162.$is_func = true
        _getNewPosition162.$infos = {
            __name__:"_getNewPosition",
            __qualname__:"Deterministic_SLAM._getNewPosition",
            __defaults__ : _b_.None,
            __kwdefaults__ : _b_.None,
            __annotations__: {},
            __dict__: {__class__: _b_.dict, $string_dict: {},$str_hash: {}, $numeric_dict: {}, $object_dict:{}},
            __doc__: '\n\
        Implements the _getNewPosition() method of SinglePositionSLAM. Returns a copy of the starting position.\n\
        ',
            __module__ : "__main__",
            __code__:{
                co_argcount:2,
                co_filename:$locals___main__["__file__"],
                co_firstlineno:299,
                co_flags:67,
                co_freevars: [],
                co_kwonlyargcount:0,
                co_name: "_getNewPosition",
                co_nlocals: 2,
                co_posonlyargcount: 0,
                co_varnames: $B.fast_tuple(["self", "start_position"]
            )}
        };None;
        return _getNewPosition162}
        $locals___main___Deterministic_SLAM_155["_getNewPosition"] = _getNewPosition$162({})
        $locals___main___Deterministic_SLAM_155["_getNewPosition"].$set_defaults = function(value){return $locals___main___Deterministic_SLAM_155["_getNewPosition"] = _getNewPosition$162(value)}
        $B.leave_frame()
        return $locals___main___Deterministic_SLAM_155;
    }
    )();
    $Deterministic_SLAM_155.__module__ = $locals___main__.__name__
    ;$locals___main__["Deterministic_SLAM"] = $B.$class_constructor("Deterministic_SLAM", $Deterministic_SLAM_155,tuple.$factory([$locals___main__["SinglePositionSLAM"]]),["$locals___main__[\"SinglePositionSLAM\"]"],[])
    ;$locals___main__["Deterministic_SLAM"].__doc__ = '\n\
    Deterministic_SLAM implements the _getNewPosition() method of SinglePositionSLAM by simply\n\
    copying the search-start position.\n\
    ';
    None;
    $B.leave_frame()
}
catch(err){
    $B.leave_frame()
    throw err
}
