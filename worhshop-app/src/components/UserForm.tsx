import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Form Exercise-Solution</h2>
      <form onSubmit={handleSubmit}>
        {/* input field สำหรับชื่อ */}
        <div style={{ marginBottom: '10px' }}>
          <label>ชื่อ:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="กรอกชื่อของคุณ"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* input field สำหรับอีเมล */}
        <div style={{ marginBottom: '10px' }}>
          <label>อีเมล:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="กรอกอีเมลของคุณ"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* ปุ่ม Submit */}
        <button
          type="submit"
          style={{
            background: 'green',
            color: 'white',
            padding: '8px 12px',
            marginRight: '8px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>

        {/* ปุ่ม Clear */}
        <button
          type="button"
          onClick={handleClear}
          style={{
            background: 'red',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
      </form>

      {/* แสดงผลข้อมูลที่กรอกแบบ real-time */}
      <div
        style={{
          marginTop: '20px',
          background: '#f2f2f2',
          padding: '10px',
          borderRadius: '6px',
        }}
      >
        <strong>ข้อมูลปัจจุบัน:</strong>
        <p>ชื่อ: {formData.name || 'ยังไม่ได้กรอก'}</p>
        <p>อีเมล: {formData.email || 'ยังไม่ได้กรอก'}</p>
      </div>
    </div>
  );
};

export default UserForm;
