import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

// Optional: Chart imports (install Recharts first)
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [stats, setStats] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Auth guard
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    // Simulate fetching data
    setTimeout(() => {
      setStats({
        requestsMade: 12,
        peopleHelped: 5,
        feedbacks: 3,
      });
      setRecentActivities([
        "You helped Ramesh with medicine delivery.",
        "You requested help for electricity issue.",
        "Your feedback was submitted successfully.",
      ]);
      setFeedbacks([
        "Great service, thank you!",
        "Quick response from a volunteer.",
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Optional Chart Data (use if Recharts is installed)
  const chartData = [
    { name: "Requests Made", value: stats?.requestsMade },
    { name: "People Helped", value: stats?.peopleHelped },
    { name: "Feedbacks", value: stats?.feedbacks },
  ];
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-100 rounded shadow">
              <h2 className="text-lg font-semibold">Requests Made</h2>
              <p className="text-2xl">{stats.requestsMade}</p>
            </div>
            <div className="p-4 bg-green-100 rounded shadow">
              <h2 className="text-lg font-semibold">People Helped</h2>
              <p className="text-2xl">{stats.peopleHelped}</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded shadow">
              <h2 className="text-lg font-semibold">Feedbacks Received</h2>
              <p className="text-2xl">{stats.feedbacks}</p>
            </div>
          </div>

          {/* Optional Chart */}
          {/* <div className="mt-8">
            <PieChart width={300} height={250}>
              <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div> */}

          {/* Call-to-Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-purple-100 rounded shadow">
              <h3 className="font-semibold mb-2">Become a Volunteer</h3>
              <Button label="Join Now" onClick={() => alert("Join flow")} />
            </div>
            <div className="p-4 bg-orange-100 rounded shadow">
              <h3 className="font-semibold mb-2">Request Community Help</h3>
              <Button
                label="Request Help"
                onClick={() => alert("Request flow")}
              />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <ul className="bg-gray-100 p-4 rounded space-y-2">
              {recentActivities.map((activity, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  • {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback History */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Your Feedbacks</h2>
            <ul className="space-y-2">
              {feedbacks.map((feedback, idx) => (
                <li key={idx} className="bg-white p-3 rounded shadow text-sm">
                  {feedback}
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback Modal Trigger */}
          <div className="mt-6">
            <Button onClick={handleOpenModal} label="Give Feedback" />
          </div>

          {/* Feedback Modal */}
          <Modal
            isOpen={showModal}
            onClose={handleCloseModal}
            title="Submit Feedback"
          >
            <form className="space-y-4">
              <Input label="Your Name" placeholder="Enter your name" />
              <Textarea
                label="Your Feedback"
                placeholder="Write something helpful..."
              />
              <div className="flex justify-end">
                <Button label="Submit" />
              </div>
            </form>
          </Modal>
        </>
      )}
    </div>
  );
};

export default Dashboard;
