import React, { useEffect, useState } from 'react';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch } from 'react-redux';
import { setSearchText } from '@/redux/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Bangalore", "Hyderabad", "Noida", "Pune", "Remote"]
    },
    {
        filterType: "Industry",
        array: ["Backend Developer", "Business Analyst", "Data Analyst", "Frontend Developer", "FullStack Developer", "Software Developer"]
    },
    {
        filterType: "Salary",
        array: ["0 - 5 lakh", "5 lakh to 10 lakh", "10 lakh to 15 lakh"]
    },
];

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (value) => {
        setSelectedValue(value);
    };
    useEffect(() => {
        dispatch(setSearchText(selectedValue));
    }, [selectedValue])

    return (
        <div className='w-full bg-slate-100 p-3 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-lg'>Filter Jobs</h1>
            </div>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={handleChange}>
                {filterData?.map((data, index) => (
                    <div key={index}>
                        <h1 className='font-medium text-lg'>{data.filterType}</h1>
                        {data.array.map((item, idx) => {
                            const itemId = `r${index}-${idx}`; // Ensure unique id for each radio button
                            return (
                                <div key={idx} className="flex items-center space-x-2 my-2">
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default FilterCard;
