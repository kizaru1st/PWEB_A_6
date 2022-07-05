const model = require('../models/indexmodel');
const {
    Op,
    QueryTypes
} = require("sequelize");
const sequelize = model.dbconfig;
const controller = {};

controller.createMatkul = (req, res) => {
    res.render("admin/view_admin-tambah-mk")
}

controller.tambahMatkul = async function (req, res) {

    const {
        code,
        name,
        credit,
        semester,
        description
    } = req.body;

    const kode = code;
    try {
        await model.courses.create({
            curriculum_id: 1,
            code: code,
            name: name,
            alias_name: "A",
            credit: credit,
            semester: semester,
            description: description
        });

        const id_course = await model.courses.findOne({
            where: {
                code: kode
            },
            attributes: ['id']
        })
        await model.course_plans.create({
            curriculum_id: 1,
            course_id: id_course.id,
            rev: 0,
            code: code,
            name: name,
            alias_name: "A",
            credit: credit,
            semester: semester,
            description: description
        });
        res.redirect('/admin/rps');
    } catch (error) {
        console.log(error);
    }


}

controller.editMatkul = async function (req, res) {

    const {
        kodeMatkul,
        nama,
        alias,
        bobotSKS,
        semester,
        deskripsi,
        materiPembelajaran
    } = req.body;

    try {
        await model.update({
            code: kodeMatkul,
            name: nama,
            alias_name: alias,
            credit: bobotSKS,
            semester: semester,
            description: deskripsi,
            material: materiPembelajaran
        }, {
            where: {
                id: id
            }
        });
        res.redirect('/admin/rps');
    } catch (error) {
        console.log(error);
    }
}

controller.tambahDosen = async function (req, res) {

    const {
        id_rps,
        id_dosen
    } = req.body;


    try {
        await model.course_plan_lecturers.create({
            course_plan_id: id_rps,
            lecturer_id: id_dosen,
            creator: 0
        });
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }


}

controller.hapusDosen = async function (req, res) {

    const {
        idrps,
        iddosen
    } = req.body;

    try {
        await model.course_plan_lecturers.destroy({
            where: {
                course_plan_id: idrps,
                lecturer_id: iddosen
            }
        });
        console.log("berhasil hapuss");
        res.redirect('back');
    } catch (error) {
        console.log(error);
    }


}

// --------------untuk ditampilkan-------------

controller.tampilRpsAdmin = async function (req, res) {
    const kurikulum = await model.curricula.findAll({
        attributes: ['id', 'name']
    });
    const matkul = await model.courses.findAll();
    res.render("admin/view_admin-dosen", {
        kurikulum,
        matkul
    });
}

//   }

controller.infoRPSdosen = async (req, res) => {

    const id = req.params.id;

    const matkul = await model.courses.findOne({
        where: {
            id: id
        },
        attributes: ['name']
    });
    const rps = await model.course_plans.findOne({
        where: {
            course_id: id
        },
        attributes: ['id']
    });

    const dosenMatkul = await sequelize.query(
        'SELECT course_plan_lecturers.course_plan_id, course_plan_lecturers.lecturer_id, lecturers.name, lecturers.reg_id FROM lecturers LEFT JOIN course_plan_lecturers ON course_plan_lecturers.lecturer_id = lecturers.id WHERE course_plan_lecturers.course_plan_id= :idrps ORDER BY lecturers.name;', {
            replacements: {
                idrps: rps.id
            },
            type: QueryTypes.SELECT
        }
    );

    const dosen = await model.lecturers.findAll({
        order: ['name'],
        attributes: ['id', 'name']
    });

    // res.send(dosenMatkul);
    res.render("admin/view_admin-add-dosen", {
        dosen,
        matkul,
        rps,
        dosenMatkul
    });
}

controller.tampilLaporanRpsMatkul = async function (req, res) {
    const projectBase = await model.course_plan_details.count({
        where: {
            method: "Project Based"
        }
    });
    const caseBase = await model.course_plan_details.count({
        where: {
            method: "Cased Based"
        }
    });

    const cpmk = await model.course_los.findAll({
        attributes: ['id', 'code', 'name', 'type']
    });

    const rps = await model.course_plans.findAll({
        attributes: ['id', 'rev', 'code', 'name', 'credit']
    });

    // res.json(caseBase)
    res.render("admin/view_admin-cetak-laporan", {
        dasbordaktif: "",
        rpsaktif: "active",
        projectBase,
        caseBase,
        rps,
        cpmk
    });
}

controller.cetakLaporan = async function (req, res) {
    const projectBase = await model.course_plan_details.count({
        where: {
            method: "Project Based"
        }
    });
    const caseBase = await model.course_plan_details.count({
        where: {
            method: "Cased Based"
        }
    });

    const cpmk = await model.course_los.findAll({
        attributes: ['id', 'code', 'name', 'type']
    });

    const rps = await model.course_plans.findAll({
        attributes: ['id', 'rev', 'code', 'name', 'credit']
    });

    // res.json(caseBase)
    res.render("admin/view_admin-print-laporan", {
        dasbordaktif: "",
        rpsaktif: "active",
        projectBase,
        caseBase,
        rps,
        cpmk
    });
}



module.exports = controller;