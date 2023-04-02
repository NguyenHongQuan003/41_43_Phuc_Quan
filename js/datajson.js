let sp1 = {
    masp: 1,
    tensp: "Vios1.5GR-S (thể thao)",
    hinhanh: '../img/toyota/p1-1.jpeg',
    dongia: "641.000.000 VND",
    mota: 'Phụ kiện đi kèm với bảng bên em gồm:' +
        '-Bộ bình thường gồm: 5 chiếc bút màu,1 hộp sáp màu ,2 miếng lau bảng, 1 kẹp phấn, và 8 miếng nam châm' +
        '-Bộ đầy đủ: gồm phụ kiện bình thường + có thêm bảng chữ cái,số,con vật bằng nam châm , dòng kẻ ô ly ,tạp giề bao tay, và thêm 8 chiếc bút  màu....' +
        '-Giúp các mẹ giáo dục và dạy con học tập một cách tốt nhất'
}
let sp2 = {
    masp: 2,
    tensp: "Camry 2.5HV Hybrid 2023",
    hinhanh: '../img/toyota/p2-1.jpg',
    dongia: "1.460.000.000 VND",
    mota: 'Phụ kiện đi kèm với bảng bên em gồm:' +
        '-Bộ bình thường gồm: 5 chiếc bút màu,1 hộp sáp màu ,2 miếng lau bảng, 1 kẹp phấn, và 8 miếng nam châm' +
        '-Bộ đầy đủ: gồm phụ kiện bình thường + có thêm bảng chữ cái,số,con vật bằng nam châm , dòng kẻ ô ly ,tạp giề bao tay, và thêm 8 chiếc bút  màu....'
}

let sp3 = {
    masp: 3,
    tensp: "Camry 2.5HV Hybrid 2023",
    hinhanh: '../img/toyota/p2-1.jpg',
    dongia: "1.460.000.000 VND",
    mota: 'Phụ kiện đi kèm với bảng bên em gồm:' +
        '-Bộ bình thường gồm: 5 chiếc bút màu,1 hộp sáp màu ,2 miếng lau bảng, 1 kẹp phấn, và 8 miếng nam châm' +
        '-Bộ đầy đủ: gồm phụ kiện bình thường + có thêm bảng chữ cái,số,con vật bằng nam châm , dòng kẻ ô ly ,tạp giề bao tay, và thêm 8 chiếc bút  màu....'
}

let dssp = [sp1, sp2, sp3]

localStorage.setItem("dssp", JSON.stringify(dssp))