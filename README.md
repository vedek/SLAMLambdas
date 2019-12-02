# SLAMLambdas
SLAM Lambdas is   a walk-through of  SLAM code for LiDAR/Ultrasound or Camera based sensor integration with a point cloud and SLAM filters, particle or kalman or any other filter usable with AR.

Installing for Python
The BreezySLAM installation uses the popular distutils approach to installing Python packages, so all you should have to do is download and unzip the file, cd to BreezySLAM/python, and do

sudo python3 setup.py install
For a quick demo, you can then cd to BreezySLAM/examples and do

make pytest
This will generate and display a PGM file showing the map and robot trajctory for the Lidar scan and odometry data in the log file exp2.dat. If you have the Python Imaging Library installed, you can also try the log2png.py script to generate a a PNG file instead.

If you have installed PyRoboViz, you can see a “live” animation by doing

make movie
You can turn off odometry by setting the USE_ODOMETRY parameter at the top of the Makefile to 0 (zero). You can turn off the particle-filter (Monte Carlo position estimation) by commenting-out RANDOM_SEED parameter.

To see what other features are available, do

pydoc3 breezyslam
By using the component classes Map, Scan, and Position and the distanceScanToMap() method, you can develop new algorithms and particle filters of your own.

Testing with the Hokuyo URG04LX
If you're running on Linux, you can install the BreezyLidar package, the OpenCV Python package, and try the urgslam.py example in the examples folder.

Testing with the GetSurreal XV Lidar
BreezySLAM includes Python support for the inexpensive XV Lidar from GetSurreal. To try it out, you'll also need the xvlidar Python package. Once you've installed both packages, you can run the xvslam.py example in the BreezySLAM/examples folder.

Testing with the SLAMTEC RPLidar A1
BreezySLAM also includes Python support for the inexpensive RPLidar A1 from SLAMTECH. To try it out, you'll also need the rplidar Python package. Once you've installed that package, you can run the rpslam.py example in the BreezySLAM/examples folder.
