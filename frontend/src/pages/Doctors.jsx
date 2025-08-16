import React, { useContext, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Context.jsx";

export const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const filteredDocs = useMemo(() => {
    if (!speciality) return doctors;
    return doctors.filter((d) => d.speciality === speciality);
  }, [doctors, speciality]);

  const SPECIALTIES = [
    { id: "General physician", label: "General Physicians" },
    { id: "Gynecologist", label: "Гинекологи" },
    { id: "Dermatologist", label: "Дерматологи" },
    { id: "Pediatricians", label: "Педиатры" },
    { id: "Neurologist", label: "Нейрологи" },
    { id: "Gastroenterologist", label: "Гастро" },
  ];

  const handleSpecialityClick = useCallback(
    (spec) => {
      if (spec === speciality) {
        navigate("/doctors");
      } else {
        navigate(`/doctors/${encodeURIComponent(spec)}`);
      }
    },
    [navigate, speciality],
  );
  const handleOpenAppointment = useCallback(
    (id) => {
      navigate(`/appointment/${id}`);
    },
    [navigate],
  );
  const itemClass = `w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer text-left `;

  return (
    <div>
      <p className="text-gray-600">Browse through specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className=" flex flex-col gap-4 text-sm text-gray-600">
          {SPECIALTIES.map((s) => {
            const active = s.id === speciality;
            const classes = `${itemClass} ${active ? "text-gray-600 bg-gray-100" : "text-gray-500 hover:bg-gray-50"}`;
            return (
              <button
                key={s.id}
                type="button"
                className={classes}
                onClick={() => handleSpecialityClick(s.id)}
                aria-pressed={s.id === speciality}
              >
                {s.label}
              </button>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
          {" "}
          {filteredDocs.map((item) => (
            <div
              key={item._id}
              onClick={() => handleOpenAppointment(item._id)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-cetner text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm ">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
