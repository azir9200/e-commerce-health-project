import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  onDelete: (id: string) => void;
}

const DeleteConfirm = ({ onDelete }: Props) => {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!id) return;
    onDelete(id);
    navigate(-1); // go back after delete
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Delete {type}?</h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this {type}? This action cannot be
          undone.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold"
          >
            Yes, Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirm;
