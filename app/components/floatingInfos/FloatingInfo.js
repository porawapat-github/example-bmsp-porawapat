import React, { useEffect, useState } from 'react';
import {
    FloatButton,
    Modal,
    Input,
    Button,
    List,
    Space,
    Tag,
    Divider,
    Card,
    message,
} from 'antd';
import {
    CloudOutlined,
    CheckSquareOutlined,
    DeleteOutlined,
    PlusOutlined,
    EditOutlined,
} from '@ant-design/icons';

const weatherCodeMap = {
    0: { label: 'ฟ้าใส', icon: '☀️', color: 'gold' },
    1: { label: 'แดดจ้า', icon: '🌞', color: 'orange' },
    2: { label: 'มีเมฆเล็กน้อย', icon: '⛅', color: 'blue' },
    3: { label: 'เมฆมาก', icon: '☁️', color: 'gray' },
    45: { label: 'มีหมอก', icon: '🌫️', color: 'cyan' },
    48: { label: 'หมอกหนา', icon: '🌁', color: 'geekblue' },
    51: { label: 'ฝนปรอยเล็กน้อย', icon: '🌦️', color: 'blue' },
    53: { label: 'ฝนปรอยปานกลาง', icon: '🌧️', color: 'blue' },
    55: { label: 'ฝนปรอยหนัก', icon: '🌧️', color: 'volcano' },
    61: { label: 'ฝนเล็กน้อย', icon: '🌦️', color: 'cyan' },
    63: { label: 'ฝนปานกลาง', icon: '🌧️', color: 'geekblue' },
    65: { label: 'ฝนหนัก', icon: '🌧️', color: 'volcano' },
    71: { label: 'หิมะตกเล็กน้อย', icon: '❄️', color: 'blue' },
    73: { label: 'หิมะตกปานกลาง', icon: '❄️', color: 'cyan' },
    75: { label: 'หิมะตกหนัก', icon: '❄️', color: 'volcano' },
    95: { label: 'พายุฝนฟ้าคะนอง', icon: '⛈️', color: 'red' },
    99: { label: 'พายุฝนฟ้าคะนองรุนแรง', icon: '🌩️', color: 'red' },
};

const FloatingInfo = () => {
    const [weather, setWeather] = useState(null);
    const [todos, setTodos] = useState([]);
    const [isWeatherOpen, setWeatherOpen] = useState(false);
    const [isTodoOpen, setTodoOpen] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const [newDate, setNewDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const [editIdx, setEditIdx] = useState(null);
    const [editText, setEditText] = useState('');
    const [editDate, setEditDate] = useState('');
    const [editTime, setEditTime] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=13.75&longitude=100.5&current=temperature_2m,weathercode,wind_speed_10m,relative_humidity_2m'
                );
                const data = await res.json();
                setWeather(data.current);
            } catch (err) {
                console.error('ดึงข้อมูลสภาพอากาศล้มเหลว:', err);
            }
        };
        fetchWeather();
    }, []);

    const handleAdd = () => {
        if (newTodo.trim() && newDate && newTime) {
            setTodos([...todos, { text: newTodo, date: newDate, time: newTime, done: false }]);
            setNewTodo('');
            setNewDate('');
            setNewTime('');
            message.success('เพิ่มรายการแล้ว');
        } else {
            message.warning('กรุณากรอกข้อมูลให้ครบ');
        }
    };

    const handleDelete = (idx) => {
        setTodos(todos.filter((_, i) => i !== idx));
        message.info('ลบรายการแล้ว');
    };

    const handleEdit = (idx) => {
        setEditIdx(idx);
        setEditText(todos[idx].text);
        setEditDate(todos[idx].date);
        setEditTime(todos[idx].time);
    };

    const handleSaveEdit = () => {
        const updated = todos.map((item, idx) =>
            idx === editIdx ? { ...item, text: editText, date: editDate, time: editTime } : item
        );
        setTodos(updated);
        setEditIdx(null);
        setEditText('');
        setEditDate('');
        setEditTime('');
        message.success('บันทึกรายการแล้ว');
    };

    const handleToggleDone = (idx) => {
        setTodos(
            todos.map((item, i) => (i === idx ? { ...item, done: !item.done } : item))
        );
    };

    const pendingTodos = todos.filter((item) => !item.done);
    const completedTodos = todos.filter((item) => item.done);

    const weatherDetail = weather ? weatherCodeMap[weather.weathercode] : null;

    return (
        <>
            <FloatButton
                icon={<CloudOutlined />}
                tooltip="ดูสภาพอากาศ"
                onClick={() => setWeatherOpen(true)}
                style={{ insetInlineEnd: 24, insetBlockEnd: 30 }}
            />
            <FloatButton
                icon={<CheckSquareOutlined />}
                tooltip="ToDo List"
                onClick={() => setTodoOpen(true)}
                style={{ insetInlineEnd: 84, insetBlockEnd: 30 }}
            />

            {/* Modal สภาพอากาศ */}
            <Modal
                title="สภาพอากาศปัจจุบัน (กรุงเทพ)"
                open={isWeatherOpen}
                onCancel={() => setWeatherOpen(false)}
                footer={null}
                centered
            >
                {weather ? (
                    <Card
                        variant="outlined"
                        style={{ backgroundColor: '#f0f5ff' }}
                        title={`${weatherDetail?.icon || '❔'} ${weatherDetail?.label || 'ไม่ทราบ'}`}
                        extra={<Tag color={weatherDetail?.color || 'default'}>W-Code: {weather.weathercode}</Tag>}
                    >
                        <p><strong>🌡️ อุณหภูมิ:</strong> {weather.temperature_2m} °C</p>
                        <p><strong>💧 ความชื้นสัมพัทธ์:</strong> {weather.relative_humidity_2m} %</p>
                        <p><strong>💨 ความเร็วลม:</strong> {weather.wind_speed_10m} m/s</p>
                        <p><strong>🕒 เวลาวัด:</strong> {new Date(weather.time).toLocaleString()}</p>
                    </Card>
                ) : (
                    <p>กำลังโหลดข้อมูล...</p>
                )}
            </Modal>

            {/* Modal ToDo */}
            <Modal
                title="ToDo List"
                open={isTodoOpen}
                onCancel={() => setTodoOpen(false)}
                footer={null}
                width={600}
            >
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Input
                        placeholder="สิ่งที่ต้องทำ"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onPressEnter={handleAdd}
                    />
                    <div style={{ display: 'flex', gap: 16 }}>
                        <Input
                            type="date"
                            value={newDate}
                            onChange={(e) => setNewDate(e.target.value)}
                            style={{ maxWidth: 180 }}
                        />
                        <Input
                            type="time"
                            value={newTime}
                            onChange={(e) => setNewTime(e.target.value)}
                            style={{ maxWidth: 120 }}
                        />
                    </div>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleAdd}
                        block
                    >
                        เพิ่มรายการ
                    </Button>
                </Space>

                <Divider orientation="left">รายการที่ต้องทำ</Divider>
                <List
                    dataSource={pendingTodos}
                    locale={{ emptyText: 'ยังไม่มีรายการ' }}
                    renderItem={(item, idx) => (
                        <List.Item
                            actions={[
                                <Button icon={<EditOutlined />} size="small" onClick={() => handleEdit(todos.indexOf(item))} />,
                                <Button icon={<DeleteOutlined />} size="small" danger onClick={() => handleDelete(todos.indexOf(item))} />,
                                <Button size="small" type="primary" onClick={() => handleToggleDone(todos.indexOf(item))}>
                                    เสร็จแล้ว
                                </Button>,
                            ]}
                        >
                            <Card size="small" style={{ width: '100%' }}>
                                <p><strong>{item.date} เวลา {item.time}</strong>: {item.text}</p>
                                <Tag color="blue">ยังไม่เสร็จ</Tag>
                            </Card>
                        </List.Item>
                    )}
                />
            </Modal>

            {/* Modal แก้ไขรายการ */}
            <Modal
                title="แก้ไขรายการ"
                open={editIdx !== null}
                onCancel={() => setEditIdx(null)}
                onOk={handleSaveEdit}
                okText="บันทึก"
                cancelText="ยกเลิก"
            >
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <Input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                    <Input type="time" value={editTime} onChange={(e) => setEditTime(e.target.value)} />
                </Space>
            </Modal>
        </>
    );
};

export default FloatingInfo;
