const {isEmpty} = require("../utils");

const checkinHistory = require("../Model/checkinHistory");

async function checkin(history) {
    if (isEmpty(history.classId) || isEmpty(history.userId)) return null
    const res = await checkinHistory.find({classId: history.classId, userId: history.userId})
    if (res && res[0]) {
        if (res[0].state === 'checked') res[0].state = 'other'
        else {
            res[0].state = 'checked'
        }


        await res[0].save()
        return res[0]
    }
    const newCheckin = new checkinHistory({
        role: history.role,
        userId: history.userId,
        classId: history.classId,
        date: new Date(),
        state: 'checked',
    })
    await newCheckin.save()
    return newCheckin
}

async function countForStudent(studentIds, fromTime, toTime) {
    const res = await checkinHistory.find({
        userId: { $in: studentIds },
        date: { $gte: fromTime, $lte: toTime }
    })
    console.log('countForStudent', res)

    return res
}

module.exports = {
    checkin,
    countForStudent,
}
